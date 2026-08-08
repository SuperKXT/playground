import { access, readdir, rename, stat } from "node:fs/promises";
import path from "node:path";
import { parseArgs, styleText } from "node:util";

import { config } from "../../config.js";
import { stringifyError } from "../../helpers/error.helpers.js";
import { formatToken } from "../../helpers/format-token.helpers.js";
import { confirmPrompt } from "../../helpers/prompt.helpers.js";

import { RENAME_ERRORS } from "./recursive-rename.types.js";
import type {
	TRenameOptions,
	TRenameResult,
	TRenameResultType,
} from "./recursive-rename.types.js";

type TRecursiveLogResponse = {
	logs: string[];
	success: TRenameResult[];
	error: TRenameResult[];
	unchanged: TRenameResult[];
};

type TRecursiveLogParams = {
	results: TRenameResult[];
	labels: Record<TRenameResultType, string>;
	verbose?: boolean;
	onlyChanges?: boolean;
	tree?: boolean;
	isConfirmation?: boolean;
	depth?: number;
};

export const getRecursiveLogs = ({
	results,
	labels,
	verbose,
	onlyChanges,
	tree,
	isConfirmation,
	depth = 1,
}: TRecursiveLogParams): TRecursiveLogResponse => {
	const response: TRecursiveLogResponse = {
		error: [],
		logs: [],
		success: [],
		unchanged: [],
	};

	for (const result of results) {
		const {
			type,
			path: resultPath,
			oldName,
			newName,
			error,
			children,
		} = result;

		response[type].push(result);

		if (
			verbose &&
			(!onlyChanges || type !== "unchanged" || (tree && children))
		) {
			const log = [
				tree && "  ".repeat(depth - 1),
				tree && styleText("dim", "|_ "),
				!tree && `${labels[type]} `,
				!tree && `${styleText("dim", resultPath)}/`,
				type === "unchanged" ? oldName : styleText("strikethrough", oldName),
				type !== "unchanged" &&
					styleText(type === "success" ? "green" : "red", ` ${newName}`),
				type === "error" && ` ${styleText("bgRed", ` ${error} `)}`,
			]
				.filter(Boolean)
				.join("");

			response.logs.push(log);
		}

		if (children) {
			const subLogs = getRecursiveLogs({
				depth: depth + 1,
				isConfirmation,
				labels,
				onlyChanges,
				results: children,
				tree,
				verbose,
			});
			response.logs.push(...subLogs.logs);
			response.success.push(...subLogs.success);
			response.error.push(...subLogs.error);
			response.unchanged.push(...subLogs.unchanged);
		}
	}

	return response;
};

export const getRenameLogs = (
	results: TRenameResult[],
	verbose?: boolean,
	onlyChanges?: boolean,
	tree?: boolean,
	isConfirmation?: boolean,
): string => {
	const labels: Record<TRenameResultType, string> = {
		error: styleText(
			"bgRedBright",
			!isConfirmation ? "   ERROR   " : "   ISSUE   ",
		),
		success: styleText(
			"bgGreenBright",
			!isConfirmation ? "  SUCCESS  " : "  POSSIBLE ",
		),
		unchanged: styleText("bgYellowBright", " UNCHANGED "),
	};

	const { logs, success, error, unchanged } = getRecursiveLogs({
		isConfirmation,
		labels,
		onlyChanges,
		results,
		tree,
		verbose,
	});

	logs.push(
		[
			"\n",
			labels.success,
			styleText(["bold", "green"], ` ${success.length} `),
			labels.error,
			styleText(["bold", "red"], ` ${error.length} `),
			labels.unchanged,
			styleText(["bold", "yellow"], ` ${unchanged.length} `),
			"\n",
		].join(""),
	);

	return logs.join("\n");
};

const getExists = async (file: string): Promise<boolean> => {
	return await access(file)
		.then(() => true)
		.catch(() => false);
};

const getIsFolder = async (file: string): Promise<boolean> => {
	return await getExists(file)
		.then(async () => await stat(file))
		.then((stats) => stats.isDirectory())
		.catch(() => false);
};

const findFiles = async (folder: string): Promise<TRenameResult[]> => {
	const files = await readdir(folder);
	files.sort((first, second) => first.localeCompare(second));

	return await Promise.all(
		files.map(async (file) => {
			const oldPath = path.join(folder, file);
			const [name = "", extension = ""] = file.split(/\.(?!.*\..*)/u);

			const newName = `${formatToken(name, "kebab")}${
				extension ? "." : ""
			}${extension}`;
			const newPath = newName !== file ? path.join(folder, newName) : oldPath;
			let children: TRenameResult["children"];

			try {
				const isFolder = await getIsFolder(oldPath);
				if (isFolder) children = await findFiles(oldPath);

				if (newName === file) {
					return {
						children,
						oldName: file,
						path: folder,
						type: "unchanged",
					};
				}

				const exists = await getExists(newPath);

				if (exists) throw new Error(RENAME_ERRORS.exists);

				return {
					children,
					newName,
					oldName: file,
					path: folder,
					type: "success",
				};
			} catch (error) {
				return {
					children,
					error: stringifyError(error),
					newName,
					oldName: file,
					path: folder,
					type: "error",
				};
			}
		}),
	);
};

const renameFiles = async (
	folder: string,
	files: TRenameResult[],
): Promise<TRenameResult[]> => {
	return await Promise.all(
		files.map(async (file) => {
			const oldPath = path.join(folder, file.oldName);
			const newPath = path.join(folder, file.newName ?? file.oldName);

			const children = file.children
				? await renameFiles(newPath, file.children)
				: undefined;

			if (file.type === "success") {
				try {
					await rename(oldPath, newPath);
				} catch (error) {
					return {
						...file,
						children,
						error: stringifyError(error),
						type: "error",
					};
				}
			}

			return {
				...file,
				children,
			};
		}),
	);
};

export const RECURSIVE_RENAME_HELP = [
	"kebab-rename PATH \x12b[9m[OPTIONS]",
	"\n",
].join("\n");

export const recursiveRename = async (
	location: string,
	{ yes, verbose, onlyChanges, tree }: TRenameOptions,
): Promise<TRenameResult[]> => {
	const folder = location.replace(/\/+$/u, "");

	if (!(await getIsFolder(folder))) throw new Error(RENAME_ERRORS.badPath);

	const files = await findFiles(folder);

	if (!yes) {
		console.info(getRenameLogs(files, verbose, onlyChanges, tree, true));

		const confirmed = await confirmPrompt("Do you want to continue?");

		if (!confirmed) return [];
	}

	const results = await renameFiles(folder, files);

	console.info(getRenameLogs(results, verbose, onlyChanges, tree));

	return results;
};

if (!config.isTest) {
	try {
		const { values, positionals } = parseArgs({
			allowPositionals: true,
			args: process.argv.slice(2),
			options: {
				help: { default: false, short: "h", type: "boolean" },
				"only-changes": { default: false, short: "o", type: "boolean" },
				tree: { default: false, short: "t", type: "boolean" },
				verbose: { default: false, short: "v", type: "boolean" },
				yes: { default: false, short: "y", type: "boolean" },
			},
		});

		const [folder] = positionals;
		if (!folder) throw new Error(RENAME_ERRORS.badArguments);

		const { verbose, yes, "only-changes": onlyChanges, tree, help } = values;

		recursiveRename(folder, {
			help,
			onlyChanges,
			tree,
			verbose,
			yes,
		}).catch((error: unknown) => {
			console.error(stringifyError(error));
		});
	} catch {
		throw new Error(RENAME_ERRORS.badArguments);
	}
}

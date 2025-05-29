import { access, readdir, rename, stat } from "node:fs/promises";
import path from "node:path";

import chalk from "chalk";
import argumentParser from "minimist-lite";
import prompt from "prompt";
import { z } from "zod/v4";

import { RENAME_ERRORS } from "./recursive-rename.types.js";

import { config } from "../../config.js";
import { stringifyError } from "../../helpers/error.helpers.js";
import { formatToken } from "../../helpers/format-token.helpers.js";

import type {
	TRenameOptions,
	TRenameResult,
	TRenameResultType,
} from "./recursive-rename.types.js";

const PARAMS_SCHEMA = z.strictObject({
	"--": z.string().array().length(0).optional(),
	_: z.tuple([z.string()]),
	h: z.boolean().optional(),
	help: z.boolean().optional(),
	o: z.boolean().optional(),
	"only-changes": z.boolean().optional(),
	t: z.boolean().optional(),
	tree: z.boolean().optional(),
	v: z.boolean().optional(),
	verbose: z.boolean().optional(),
	y: z.boolean().optional(),
	yes: z.boolean().optional(),
});

export type TParams = z.infer<typeof PARAMS_SCHEMA>;

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
				tree && chalk.dim("|_ "),
				!tree && `${labels[type]} `,
				!tree && `${chalk.dim(resultPath)}/`,
				type === "unchanged" ? oldName : chalk.strikethrough(oldName),
				type !== "unchanged" &&
					chalk[type === "success" ? "green" : "red"](` ${newName}`),
				type === "error" && ` ${chalk.bgRed(` ${error} `)}`,
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
		error: chalk.bgRedBright(!isConfirmation ? "   ERROR   " : "   ISSUE   "),
		success: chalk.bgGreenBright(
			!isConfirmation ? "  SUCCESS  " : "  POSSIBLE ",
		),
		unchanged: chalk.bgYellowBright(" UNCHANGED "),
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
			chalk.bold.green(` ${success.length} `),
			labels.error,
			chalk.bold.red(` ${error.length} `),
			labels.unchanged,
			chalk.bold.yellow(` ${unchanged.length} `),
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

		prompt.start();
		prompt.message = "";
		prompt.delimiter = "";
		const { confirm } = await prompt.get({
			properties: {
				confirm: {
					description: "Do you want to continue? [y/n]: ",
					message: "Please enter y for yes or n for no",
					pattern: /^[yn]$/iu,
					type: "string",
				},
			},
		});

		if (confirm !== "y" && confirm !== "Y") return [];
	}

	const results = await renameFiles(folder, files);

	console.info(getRenameLogs(results, verbose, onlyChanges, tree));

	return results;
};

if (!config.isTest) {
	try {
		const args = argumentParser<TParams>(process.argv.slice(2), {
			alias: {
				help: "h",
				"only-changes": "o",
				tree: "t",
				verbose: "v",
				yes: "y",
			},
		});

		const {
			_: [folder],
			verbose,
			yes,
			"only-changes": onlyChanges,
			tree,
			help,
		} = PARAMS_SCHEMA.parse(args);

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

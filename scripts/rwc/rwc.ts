import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

import { format, resolveConfig } from "prettier";

import { getIssueUrl, parseIssue, scaffold } from "./scaffold.js";
import type { TParsedIssue } from "./scaffold.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "../..");
const RWC_DIR = path.join(ROOT, "rendezvous-with-cassidoo");

/** the newsletter occasionally skips a week, so look around the computed date */
const WEEK_OFFSETS = [0, 1, -1, 2, -2, 3, -3];

const fetchIssue = async (url: string): Promise<TParsedIssue | undefined> => {
	const response = await fetch(url, {
		headers: { "User-Agent": "Mozilla/5.0 (rwc-scaffold)" },
	});
	if (!response.ok) return undefined;
	return parseIssue(await response.text());
};

const getNextIssue = async (): Promise<number> => {
	const issues = (await readdir(RWC_DIR)).map(Number).filter(Number.isInteger);
	return Math.max(...issues) + 1;
};

const findIssue = async (
	issue: number,
): Promise<{ url: string; parsed: TParsedIssue }> => {
	for (const offset of WEEK_OFFSETS) {
		const url = getIssueUrl(issue, offset);
		const parsed = await fetchIssue(url).catch(() => undefined);
		if (parsed?.issue === issue) return { url, parsed };
	}
	throw new Error(
		`Could not find issue #${issue}, it may not be published yet. Pass its url instead: pnpm rwc <url>`,
	);
};

const getCodeBlock = (markdown: string): string | undefined => {
	return /```ts\n[\s\S]*?```/u.exec(markdown)?.[0];
};

const getUnknownWords = async (files: string[]): Promise<string[]> => {
	const args = ["exec", "cspell", "--no-progress", "--words-only", "--unique"];
	const output = await promisify(execFile)("pnpm", [...args, ...files], {
		cwd: ROOT,
	}).catch((error: unknown) => error as { stdout?: string });
	return (output.stdout ?? "").split("\n").filter(Boolean);
};

const run = async () => {
	const [target, nameOverride] = process.argv.slice(2);
	let url: string;
	let parsed: TParsedIssue;
	if (target?.startsWith("http")) {
		const fetched = await fetchIssue(target);
		if (!fetched) throw new Error(`Could not fetch ${target}`);
		url = target;
		parsed = fetched;
	} else {
		const issue = target ? Number(target) : await getNextIssue();
		if (!Number.isInteger(issue)) {
			throw new Error("Usage: pnpm rwc [issue number | url] [function name]");
		}
		({ url, parsed } = await findIssue(issue));
	}

	const dir = path.join(RWC_DIR, String(parsed.issue));
	if (existsSync(dir)) {
		throw new Error(`${path.relative(ROOT, dir)} already exists`);
	}

	const { files, name, todo } = scaffold(parsed, url, nameOverride);
	await mkdir(dir);
	const written: string[] = [];
	for (const [file, content] of Object.entries(files)) {
		const filepath = path.join(dir, file);
		const formatted = await format(content, {
			...(await resolveConfig(filepath)),
			filepath,
		});
		if (getCodeBlock(formatted) !== getCodeBlock(content)) {
			console.warn(`! prettier reformatted the examples in ${file}`);
		}
		await writeFile(filepath, formatted);
		written.push(path.relative(ROOT, filepath));
	}

	console.info(`Scaffolded #${parsed.issue} ${name} from ${url}`);
	for (const file of written) console.info(`  ${file}`);
	if (todo) {
		console.warn(`! ${todo} example(s) could not be parsed, see the test.todo`);
	}
	const words = await getUnknownWords(written);
	if (words.length) {
		console.warn(`! words unknown to cspell: ${words.join(", ")}`);
	}
};

try {
	await run();
} catch (error) {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
}

import chalk from "chalk";
import argumentParser from "minimist-lite";
import { z } from "zod";

import { WORDLE_WORDS } from "./word-list.js";

import { config } from "../../config.js";

const REGEX = {
	available: /^[a-z]{0,26}$/iu,
	known: /^[a-z]{0,5}$/iu,
	pattern: /((\([a-z]+\))|[a-z*]){5}/iu,
	unavailable: /^[a-z]{0,26}$/iu,
	exclude: /\(([a-z]+)\)/giu,
	duplicate: /(.).*\1/iu,
};
const ALPHABETS = "abcdefghijklmnopqrstuvxwyz"; // cSpell: disable-line

const ARGUMENT_SCHEMA = z.object({
	available: z.string().regex(REGEX.available).default(ALPHABETS),
	known: z.string().regex(REGEX.known).default(""),
	pattern: z.string().regex(REGEX.pattern).default("*****"),
	distinct: z.boolean().default(false),
	unavailable: z.string().regex(REGEX.unavailable).default(""),
});

export type TArguments = z.input<typeof ARGUMENT_SCHEMA>;

export const findWordle = (parameters: TArguments): string[] => {
	const parse = ARGUMENT_SCHEMA.safeParse(parameters);
	if (!parse.success) throw new Error(z.prettifyError(parse.error));
	const { available, unavailable, pattern, known, distinct } = parse.data;

	const availableCharacters = unavailable
		? available.replace(new RegExp(`[${unavailable}]`, "giu"), "")
		: available;

	const regex = new RegExp(
		pattern
			.replace(/\*/gu, `[${availableCharacters}]`)
			.replace(
				REGEX.exclude,
				(_, p1: string) =>
					`[${availableCharacters.replace(new RegExp(`[${p1}]`, "giu"), "")}]`,
			),
		"iu",
	);

	const matches = WORDLE_WORDS.filter(
		(word) =>
			(!distinct || !REGEX.duplicate.test(word)) &&
			known.split("").every((character) => word.includes(character)) &&
			regex.test(word),
	);

	if (!config.isTest) {
		console.info(
			[
				"Found",
				chalk.bgGreen(matches.length),
				`Match${matches.length !== 1 ? "es" : ""}`,
			].join(" "),
		);
		console.info(chalk.green(matches.join(", ")));
	}
	return matches;
};

if (!config.isTest) {
	const args = argumentParser<TArguments>(process.argv.slice(2), {
		alias: {
			available: "a",
			known: "k",
			pattern: "p",
			unavailable: "u",
			distinct: "d",
		},
	});
	findWordle(args);
}

import chalk from "chalk";
import argumentParser from "minimist-lite";
import { z } from "zod";

import { WORDLE_WORDS } from "./word-list.js";

import { config } from "../../config.js";

const EXCLUDE_CHARACTERS_REGEX = /\(([a-z]+)\)/giu;
const VALID_WORD_PATTERN = /((\([a-z]+\))|[a-z*]){5}/iu;
const DUPLICATE_CHARACTER_REGEX = /(.).*\1/iu;
/* cspell: disable-next-line */
const ALPHABETS = "abcdefghijklmnopqrstuvxwyz";

const ARGUMENT_SCHEMA = z.object({
	available: z.string().regex(/^[a-z]{0,26}$/iu),
	known: z.string().regex(/^[a-z]{0,5}$/iu),
	pattern: z.string().regex(VALID_WORD_PATTERN),
	distinct: z.boolean(),
	unavailable: z.string().regex(/^[a-z]{0,26}$/iu),
});

export type TArguments = z.infer<typeof ARGUMENT_SCHEMA>;

export const findWordle = (parameters: TArguments): string[] => {
	const { available, unavailable, pattern, known, distinct } =
		ARGUMENT_SCHEMA.parse(parameters);

	const availableCharacters = unavailable
		? available.replace(new RegExp(`[${unavailable}]`, "giu"), "")
		: available;

	const regex = new RegExp(
		pattern
			.replace(/\*/gu, `[${availableCharacters}]`)
			.replace(
				EXCLUDE_CHARACTERS_REGEX,
				(_, p1: string) =>
					`[${availableCharacters.replace(new RegExp(`[${p1}]`, "giu"), "")}]`,
			),
		"iu",
	);

	const matches = WORDLE_WORDS.filter(
		(word) =>
			(!distinct || !DUPLICATE_CHARACTER_REGEX.test(word)) &&
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

export const DEFAULT_ARGS: TArguments = {
	available: ALPHABETS,
	known: "",
	pattern: "*****",
	distinct: false,
	unavailable: "",
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
		default: DEFAULT_ARGS,
	});
	findWordle(args);
}

import { parseArgs, styleText } from "node:util";

import { note } from "@clack/prompts";
import { z } from "zod";

import { config } from "../../config.js";

import { WORDLE_WORDS } from "./word-list.js";

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
		note(
			matches.length ? styleText("green", matches.join(", ")) : "No matches",
			`${matches.length} Match${matches.length !== 1 ? "es" : ""}`,
		);
	}
	return matches;
};

if (!config.isTest) {
	const { values } = parseArgs({
		args: process.argv.slice(2),
		options: {
			available: { type: "string", short: "a" },
			known: { type: "string", short: "k" },
			pattern: { type: "string", short: "p" },
			unavailable: { type: "string", short: "u" },
			distinct: { type: "boolean", short: "d" },
		},
	});
	findWordle(values);
}

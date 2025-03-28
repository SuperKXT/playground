import { expect, test } from "vitest";

import { DEFAULT_ARGS, findWordle } from "./wordle.js";

import type { TWordleWord } from "./word-list.js";
import type { TArguments } from "./wordle.js";

type TTest = {
	args: Partial<TArguments>;
	results: TWordleWord[];
};

const TEST_CASES: TTest[] = [
	{
		args: {
			known: "qul",
			pattern: "q*e(ueq)(ueq)",
		},
		results: ["quell"],
	},
	{
		args: {
			/* cspell: disable-next-line */
			known: "crut",
		},
		/* cspell: disable */
		results: [
			"cruet",
			"eruct",
			"cruft",
			"curst",
			"crout",
			"recut",
			"truck",
			"cuter",
			"crust",
			"court",
			"curat",
			"truce",
			"curet",
		],
		/* cspell: enable */
	},
	{
		args: {
			/* cspell: disable-next-line */
			available: "prudeaqwzxjhiu",
			pattern: "p*u(pu)*",
		},
		results: ["prude"],
	},
	{
		args: {
			/* cspell: disable-next-line */
			available: "qwygjzxmloc",

			known: "loc",
			pattern: "(l)o(o)(co)*",
		},
		results: ["colly", "coyly"],
	},
	{
		args: {
			/* cspell: disable-next-line */
			available: "qwygjzxmloc",

			known: "loc",
			pattern: "(l)o(o)(co)*",
			repeat: false,
		},
		results: [],
	},
	{
		args: {
			/* cspell: disable-next-line */
			available: "qwtypafghjkzxvbm",
			repeat: false,
		},
		/* cspell: disable-next-line */
		results: ["bawty", "thawy", "pawky", "mawky", "gawky", "vampy"],
	},
	{
		args: {
			known: "ec",

			pattern: "e(e)c*(ce)",
			/* cspell: disable-next-line */
			unavailable: "asduiopkbn",
		},
		results: ["excel"],
	},
];

test.each(TEST_CASES)("testing findWordle", ({ args, results }) => {
	const response = findWordle({
		...DEFAULT_ARGS,
		...args,
	} as typeof DEFAULT_ARGS);
	expect(response).toStrictEqual(results);
});

import { expect, test } from "vitest";

import { getOrdinalNumber } from "./get-ordinal-number.js";

import type { TOrdinalNumber } from "./get-ordinal-number.js";

type TTest = {
	input: number;
	output: TOrdinalNumber;
};

const TESTS: TTest[] = [
	{ input: 0, output: "0th" },
	{ input: 1, output: "1st" },
	{ input: 2, output: "2nd" },
	{ input: 3, output: "3rd" },
	{ input: 4, output: "4th" },
	{ input: 11, output: "11th" },
	{ input: 12, output: "12th" },
	{ input: 13, output: "13th" },
	{ input: 4001, output: "4001st" },
	{ input: 542122, output: "542122nd" },
	{ input: 423, output: "423rd" },
	{ input: 1049, output: "1049th" },
];
test.each(TESTS)("testing getOrdinalNumber", ({ input, output }) => {
	const response = getOrdinalNumber(input);
	expect(response).toStrictEqual(output);
});

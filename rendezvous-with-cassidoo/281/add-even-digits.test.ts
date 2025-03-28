import { expect, test } from "vitest";

import { addEventDigits, addEventDigitsSinglePass } from "./add-even-digits.js";

type TTest = {
	input: number;
	output: number;
};

const TESTS: TTest[] = [
	{ input: 548915381, output: 26 },
	{ input: 10, output: 0 },
	{ input: 1010.11, output: 1 },
	{ input: 0, output: 0 },
	{ input: -123.456, output: 12 },
];
test.each(TESTS)("testing maxSubArray", ({ input, output }) => {
	expect(addEventDigits(input)).toStrictEqual(output);
	expect(addEventDigitsSinglePass(input)).toStrictEqual(output);
});

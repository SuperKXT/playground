import { expect, test } from "vitest";

import { balanceParens } from "./balance-parens.js";

type TTest = {
	input: string;
	output: number;
};

const TESTS: TTest[] = [
	{ input: "()", output: 0 },
	{ input: "(()", output: 1 },
	{ input: "))()))))()", output: 6 },
	{ input: ")))))", output: 5 },
];
test.each(TESTS)("testing balanceParens", ({ input, output }) => {
	expect(balanceParens(input)).toStrictEqual(output);
});

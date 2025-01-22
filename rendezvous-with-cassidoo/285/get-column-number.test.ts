import { getColumnNumber } from "./get-column-number.js";

type TTest = {
	input: string;
	output: number;
};

const TESTS: TTest[] = [
	{ input: "A", output: 1 },
	{ input: "B", output: 2 },
	{ input: "C", output: 3 },
	{ input: "Z", output: 26 },
	{ input: "AA", output: 27 },
	{ input: "AB", output: 28 },
	{ input: "AH", output: 34 },
	{ input: "BQ", output: 69 },
	{ input: "DF", output: 110 },
	{ input: "AAA", output: 703 },
];

test.each(TESTS)("testing generateArrays", ({ input, output }) => {
	expect(getColumnNumber(input)).toStrictEqual(output);
});

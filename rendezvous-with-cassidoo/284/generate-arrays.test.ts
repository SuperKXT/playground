import { generateArrays } from "./generate-arrays.js";

type TTest = {
	input: number;
	output: number[][];
};

const TESTS: TTest[] = [
	{
		input: 4,
		output: [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]],
	},
	{
		input: 1,
		output: [[1]],
	},
	{
		input: -1,
		output: [],
	},
	{
		input: 0,
		output: [],
	},
];

test.each(TESTS)("testing generateArrays", ({ input, output }) => {
	expect(generateArrays(input)).toStrictEqual(output);
});

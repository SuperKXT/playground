import { expect, test } from "vitest";

import { maxSubArray } from "./max-sub-array.js";

type TTest = {
	input: [number[], number];
	output: number[];
};

const TESTS: TTest[] = [
	{ input: [[-4, 2, -5, 1, 2, 3, 6, -5, 1], 4], output: [1, 2, 3, 6] },
	{ input: [[1, 2, 0, 5], 2], output: [0, 5] },
	{ input: [[1, 2, 0, 5], 4], output: [1, 2, 0, 5] },
	{ input: [[1, 2, 0, 5], 4], output: [1, 2, 0, 5] },
	{ input: [[1, 1, 1, 1], 2], output: [1, 1] },
];
test.each(TESTS)("testing maxSubArray", ({ input, output }) => {
	expect(maxSubArray(...input)).toStrictEqual(output);
});

import { expect, test } from "vitest";

import { cornerHit } from "./cornet-hit.js";

import type { TCoord } from "./cornet-hit.js";

type TTest = {
	boxSize: TCoord;
	initialPosition: TCoord;
	screenSize: TCoord;
	result: boolean;
};

const TESTS: TTest[] = [
	{
		boxSize: [5, 5],
		initialPosition: [0, 0],
		result: true,
		screenSize: [100, 100],
	},
	{
		boxSize: [5, 5],
		initialPosition: [45, 70],
		result: false,
		screenSize: [400, 200],
	},
];
test.each(TESTS)("testing cornerHit", (testCase) => {
	const result = cornerHit(
		testCase.boxSize,
		testCase.initialPosition,
		testCase.screenSize,
	);
	expect(result).toStrictEqual(testCase.result);
});

import { expect, test } from "vitest";

import { rotateArray } from "./rotate-array.js";

test("testing isValidSudoku for test 1", () => {
	const arr = [1, 2, 3, 4, 5, 6, 7];
	rotateArray(arr, 3);
	const expected = [5, 6, 7, 1, 2, 3, 4];
	expect(arr).toStrictEqual(expected);
});

test("testing isValidSudoku for test 2", () => {
	const arr = [-1, -100, 3, 99];
	rotateArray(arr, 2);
	const expected = [3, 99, -1, -100];
	expect(arr).toStrictEqual(expected);
});

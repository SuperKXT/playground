import { expect, test } from "vitest";

import { moveZeroes } from "./move-zeroes.js";

test("testing moveZeroes for test 1", () => {
	const arr = [0, 1, 0, 3, 12];
	moveZeroes(arr);
	const expected = [1, 3, 12, 0, 0];
	expect(arr).toStrictEqual(expected);
});

test("testing moveZeroes for test 2", () => {
	const arr = [0];
	moveZeroes(arr);
	const expected = [0];
	expect(arr).toStrictEqual(expected);
});

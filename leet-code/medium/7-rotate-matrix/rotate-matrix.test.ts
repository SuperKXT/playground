import { expect, test } from "vitest";

import { rotateMatrix } from "./rotate-matrix.js";

test("testing rotateMatrix for test 1", () => {
	const arr = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];
	rotateMatrix(arr);
	const expected = [
		[7, 4, 1],
		[8, 5, 2],
		[9, 6, 3],
	];
	expect(arr).toStrictEqual(expected);
});

test("testing rotateMatrix for test 2", () => {
	const arr = [
		[5, 1, 9, 11],
		[2, 4, 8, 10],
		[13, 3, 6, 7],
		[15, 14, 12, 16],
	];
	rotateMatrix(arr);
	const expected = [
		[15, 13, 2, 5],
		[14, 3, 4, 1],
		[12, 6, 8, 9],
		[16, 7, 10, 11],
	];
	expect(arr).toStrictEqual(expected);
});

test("testing rotateMatrix for test 3", () => {
	const arr = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	];
	rotateMatrix(arr);
	const expected = [
		[9, 5, 1],
		[10, 6, 2],
		[11, 7, 3],
		[12, 8, 4],
	];
	expect(arr).toStrictEqual(expected);
});

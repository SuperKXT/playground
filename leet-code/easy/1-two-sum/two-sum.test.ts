import { expect, test } from "vitest";

import { twoSum } from "./two-sum.js";

test("testing two-sum for test 1", () => {
	const result = twoSum([2, 7, 11, 15], 9);
	const expected = [0, 1];
	expect(result).toStrictEqual(expected);
});

test("testing two-sum for test 2", () => {
	const result = twoSum([3, 2, 4], 6);
	const expected = [1, 2];
	expect(result).toStrictEqual(expected);
});

test("testing two-sum for test 3", () => {
	const result = twoSum([3, 3], 6);
	const expected = [0, 1];
	expect(result).toStrictEqual(expected);
});

test("testing two-sum for test 4", () => {
	expect(() => {
		twoSum([3, 2], 6);
	}).toThrow("No match found!");
});

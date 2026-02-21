import { expect, expectTypeOf, test } from "vitest";

import { minAbsoluteDiff } from "./min-absolute-diff.js";

test("testing minAbsoluteDiff for test 1", () => {
	const result = minAbsoluteDiff([4, 2, 1, 3]);
	const expected: Array<[number, number]> = [
		[1, 2],
		[2, 3],
		[3, 4],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing minAbsoluteDiff for test 2", () => {
	const result = minAbsoluteDiff([1, 3, 6, 10, 15]);
	const expected: Array<[number, number]> = [[1, 3]];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing minAbsoluteDiff for test 3", () => {
	const result = minAbsoluteDiff([3, 8, -10, 23, 19, -4, -14, 27]);
	const expected: Array<[number, number]> = [
		[-14, -10],
		[19, 23],
		[23, 27],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

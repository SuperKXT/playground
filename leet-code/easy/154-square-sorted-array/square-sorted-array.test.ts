import { assertType, expect, test } from "vitest";

import { sortedSquares } from "./square-sorted-array.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing sortedSquares for test 1", () => {
	const result = sortedSquares([-4, -1, 0, 3, 10]);
	const expected = [0, 1, 9, 16, 100];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sortedSquares for test 2", () => {
	const result = sortedSquares([-7, -3, 2, 3, 11]);
	const expected = [4, 9, 9, 49, 121];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

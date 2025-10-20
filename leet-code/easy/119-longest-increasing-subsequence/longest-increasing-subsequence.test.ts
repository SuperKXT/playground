import { assertType, expect, test } from "vitest";

import { longestIncreasingSubsequence } from "./longest-increasing-subsequence.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing longestIncreasingSubsequence for test 1", () => {
	const result = longestIncreasingSubsequence([1, 3, 5, 4, 7]);
	const expected = 3;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestIncreasingSubsequence for test 2", () => {
	const result = longestIncreasingSubsequence([2, 2, 2, 2, 2]);
	const expected = 1;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestIncreasingSubsequence for test 3", () => {
	const result = longestIncreasingSubsequence([1, 3, 5, 4, 2, 3, 4, 5]);
	const expected = 4;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { expect, expectTypeOf, test } from "vitest";

import { longestIncreasingSubsequence } from "./longest-increasing-subsequence.js";

test("testing longestIncreasingSubsequence for test 1", () => {
	const result = longestIncreasingSubsequence([1, 3, 5, 4, 7]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longestIncreasingSubsequence for test 2", () => {
	const result = longestIncreasingSubsequence([2, 2, 2, 2, 2]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longestIncreasingSubsequence for test 3", () => {
	const result = longestIncreasingSubsequence([1, 3, 5, 4, 2, 3, 4, 5]);
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

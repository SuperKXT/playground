import { assertType, expect, test } from "vitest";

import { longestSubsequence } from "./longest-sub-sequence.js";

test("testing longestSubsequence 1", () => {
	const result = longestSubsequence([1, 2, 3, 4, 5]);
	const expected = 5;
	expect(result).toStrictEqual(expected);
	assertType<typeof result>(expected);
});

test("testing longestSubsequence 2", () => {
	const result = longestSubsequence([4, 2, 3, 1, 5]);
	const expected = 2;
	expect(result).toStrictEqual(expected);
	assertType<typeof result>(expected);
});

test("testing longestSubsequence 3", () => {
	const result = longestSubsequence([10, 11, 7, 8, 9, 12]);
	const expected = 3;
	expect(result).toStrictEqual(expected);
	assertType<typeof result>(expected);
});

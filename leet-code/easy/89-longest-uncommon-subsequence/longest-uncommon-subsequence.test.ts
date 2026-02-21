import { expect, expectTypeOf, test } from "vitest";

import { longestUncommonSubsequence } from "./longest-uncommon-subsequence.js";

test("testing longestUncommonSubsequence for test 1", () => {
	const result = longestUncommonSubsequence("abc", "cdc");
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longestUncommonSubsequence for test 2", () => {
	const result = longestUncommonSubsequence("aaa", "bbb");
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longestUncommonSubsequence for test 3", () => {
	const result = longestUncommonSubsequence("aaa", "aaa");
	const expected = -1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { assertType, expect, test } from "vitest";

import { longestUncommonSubsequence } from "./longest-uncommon-subsequence.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing longestUncommonSubsequence for test 1", () => {
	const result = longestUncommonSubsequence("abc", "cdc");
	const expected = 3;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestUncommonSubsequence for test 2", () => {
	const result = longestUncommonSubsequence("aaa", "bbb");
	const expected = 3;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestUncommonSubsequence for test 3", () => {
	const result = longestUncommonSubsequence("aaa", "aaa");
	const expected = -1;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

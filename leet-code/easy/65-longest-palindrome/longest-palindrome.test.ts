import { assertType, expect, test } from "vitest";

import { longestPalindrome } from "./longest-palindrome.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing longestPalindrome for test 1", () => {
	const result = longestPalindrome("abccccdd"); // cSpell: disable-line
	const expected = 7;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestPalindrome for test 2", () => {
	const result = longestPalindrome("a");
	const expected = 1;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestPalindrome for test 2", () => {
	const result = longestPalindrome("ababdd"); // cSpell: disable-line
	const expected = 6;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

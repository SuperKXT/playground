import { expect, expectTypeOf, test } from "vitest";

import { longestPalindrome } from "./longest-palindrome.js";

test("testing longestPalindrome for test 1", () => {
	const result = longestPalindrome("abccccdd"); // cSpell: disable-line
	const expected = 7 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longestPalindrome for test 2", () => {
	const result = longestPalindrome("a");
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longestPalindrome for test 3", () => {
	const result = longestPalindrome("ababdd"); // cSpell: disable-line
	const expected = 6 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

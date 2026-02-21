import { expect, expectTypeOf, test } from "vitest";

import { validPalindrome } from "./valid-palindrome.js";

test("testing validPalindrome for test 1", () => {
	const result = validPalindrome("A man, a plan, a canal: Panama");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing validPalindrome for test 2", () => {
	const result = validPalindrome("race a car");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing validPalindrome for test 3", () => {
	const result = validPalindrome(" ");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

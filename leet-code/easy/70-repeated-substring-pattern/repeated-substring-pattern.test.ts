import { expect, expectTypeOf, test } from "vitest";

import { repeatedSubstringPattern } from "./repeated-substring-pattern.js";

test("testing repeatedSubstringPattern for test 1", () => {
	const result = repeatedSubstringPattern("abab");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing repeatedSubstringPattern for test 2", () => {
	const result = repeatedSubstringPattern("aba");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing repeatedSubstringPattern for test 3", () => {
	const result = repeatedSubstringPattern("abcabcabcabc"); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

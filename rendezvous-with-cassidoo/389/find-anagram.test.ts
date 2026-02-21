import { expect, expectTypeOf, test } from "vitest";

import { findAnagrams } from "./find-anagram.js";

import type { Utils } from "../../types/utils.types.js";

test("testing findAnagram against test 1", () => {
	const result = findAnagrams("cbaebabacd", "abc"); // cSpell: disable-line;
	const expected = [0, 6] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing findAnagram against test 2", () => {
	const result = findAnagrams("fish", "cake");
	const expected = [] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing findAnagram against test 3", () => {
	const result = findAnagrams("abab", "ab");
	const expected = [0, 1, 2] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

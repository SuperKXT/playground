import { expect, expectTypeOf, test } from "vitest";

import { isAnagram } from "./is-anagram.js";

test("testing isAnagram for test 1", () => {
	const result = isAnagram("anagram", "nagaram"); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isAnagram for test 2", () => {
	const result = isAnagram("rat", "car");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

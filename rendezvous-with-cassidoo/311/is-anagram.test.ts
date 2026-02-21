import { expect, expectTypeOf, test } from "vitest";

import { isAnagram } from "./is-anagram.js";

test("testing isAnagram against test 1", () => {
	const result = isAnagram("barbie", "oppenheimer");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isAnagram against test 2", () => {
	const result = isAnagram("care", "race");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

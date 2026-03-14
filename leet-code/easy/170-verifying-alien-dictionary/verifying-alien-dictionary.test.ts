import { expect, expectTypeOf, test } from "vitest";

import { isAlienSorted } from "./verifying-alien-dictionary.js";

test("testing isAlienSorted for test 1", () => {
	const result = isAlienSorted(
		["hello", "leetcode"], // cSpell: disable-line
		"hlabcdefgijkmnopqrstuvwxyz", // cSpell: disable-line
	);
	const expected = true as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isAlienSorted for test 2", () => {
	const result = isAlienSorted(
		["word", "world", "row"], // cSpell: disable-line
		"worldabcefghijkmnpqstuvxyz", // cSpell: disable-line
	);
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isAlienSorted for test 3", () => {
	const result = isAlienSorted(
		["apple", "app"], // cSpell: disable-line
		"abcdefghijklmnopqrstuvwxyz", // cSpell: disable-line
	);
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

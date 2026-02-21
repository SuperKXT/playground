import { expect, expectTypeOf, test } from "vitest";

import { reverseVowels } from "./reverse-vowels.js";

test("testing reverseVowels for test 1", () => {
	const result = reverseVowels("IceCreAm");
	const expected = "AceCreIm" as const;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseVowels for test 2", () => {
	const result = reverseVowels("leetcode"); // cSpell: disable-line
	const expected = "leotcede" as const; // cSpell: disable-line

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseVowels for test 3", () => {
	const result = reverseVowels("a.");
	const expected = "a." as const;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseVowels for test 4", () => {
	const result = reverseVowels(" ");
	const expected = " " as const;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

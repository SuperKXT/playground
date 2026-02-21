import { expect, expectTypeOf, test } from "vitest";

import { faultyVowels } from "./faulty-vowels.js";

test("testing faultyVowels against test 1", () => {
	const result = faultyVowels("string");

	const expected = "rtsng" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing faultyVowels against test 2", () => {
	const result = faultyVowels("hello world!");
	const expected = "w hllrld!" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

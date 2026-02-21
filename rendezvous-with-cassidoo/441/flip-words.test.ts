import { expect, expectTypeOf, test } from "vitest";

import { flipWords } from "./flip-words.js";

test("testing flipWords against test 1", () => {
	const result = flipWords("cat and mice");
	const expected = "cat dna mice" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing flipWords against test 2", () => {
	const result = flipWords("banana healthy"); // cSpell: disable-line
	const expected = "banana healthy" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing flipWords against test 3", () => {
	const result = flipWords("cat and mice and ants or bees"); // cSpell: disable-line
	const expected = "cat dna mice dna stna ro bees" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

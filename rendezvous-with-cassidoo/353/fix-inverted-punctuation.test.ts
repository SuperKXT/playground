// cSpell: disable

import { expect, expectTypeOf, test } from "vitest";

import { fixInvertedPunctuation } from "./fix-inverted-punctuation.js";

test("testing fixInvertedPunctuation against test 1", () => {
	const result = fixInvertedPunctuation("Feliz cumpleaños!");
	const expected = "¡Feliz cumpleaños!" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing fixInvertedPunctuation against test 2", () => {
	const result = fixInvertedPunctuation(
		"Ella ya se graduó de la universidad? No!",
	);
	const expected = "¿Ella ya se graduó de la universidad? ¡No!" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

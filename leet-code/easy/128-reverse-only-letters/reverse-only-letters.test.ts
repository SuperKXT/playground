import { expect, expectTypeOf, test } from "vitest";

import { reverseOnlyLetters } from "./reverse-only-letters.js";

test("testing reverseOnlyLetters for test 1", () => {
	const result = reverseOnlyLetters("ab-cd");
	const expected = "dc-ba" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseOnlyLetters for test 2", () => {
	const result = reverseOnlyLetters("a-bC-dEf-ghIj");
	const expected = "j-Ih-gfE-dCba" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseOnlyLetters for test 3", () => {
	const result = reverseOnlyLetters("Test1ng-Leet=code-Q!");
	const expected = "Qedo1ct-eeLg=ntse-T!" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { expect, expectTypeOf, test } from "vitest";

import { reverseString } from "./reverse-string-ii.js";

test("testing detectCapital for test 1", () => {
	const result = reverseString("abcdefg", 2); // cSpell: disable-line
	const expected = "bacdfeg" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing detectCapital for test 2", () => {
	const result = reverseString("abcd", 2); // cSpell: disable-line
	const expected = "bacd" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

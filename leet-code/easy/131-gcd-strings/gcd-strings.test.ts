import { expect, expectTypeOf, test } from "vitest";

import { gcdStrings } from "./gcd-strings.js";

test("testing gcdStrings for test 1", () => {
	const result = gcdStrings("ABCABC", "ABC"); // cSpell: disable-line
	const expected = "ABC" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing gcdStrings for test 2", () => {
	const result = gcdStrings("ABABAB", "ABAB"); // cSpell: disable-line
	const expected = "AB" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing gcdStrings for test 3", () => {
	const result = gcdStrings("LEET", "CODE"); // cSpell: disable-line
	const expected = "" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing gcdStrings for test 4", () => {
	const result = gcdStrings("AAAAAB", "AAA"); // cSpell: disable-line
	const expected = "" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

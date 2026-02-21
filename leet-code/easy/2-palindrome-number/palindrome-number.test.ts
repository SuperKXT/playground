import { expect, expectTypeOf, test } from "vitest";

import { palindromeNumber } from "./palindrome-number.js";

test("testing palindromeNumber for test 1", () => {
	const result = palindromeNumber(121);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing palindromeNumber for test 2", () => {
	const result = palindromeNumber(-121);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing palindromeNumber for test 3", () => {
	const result = palindromeNumber(10);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

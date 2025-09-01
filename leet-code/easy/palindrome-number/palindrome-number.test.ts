import { assertType, expect, test } from "vitest";

import { palindromeNumber } from "./palindrome-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing palindromeNumber for test 1", () => {
	const result = palindromeNumber(121);
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 2", () => {
	const result = palindromeNumber(-121);
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 3", () => {
	const result = palindromeNumber(10);
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

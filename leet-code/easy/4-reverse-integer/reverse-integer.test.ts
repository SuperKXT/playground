import { assertType, expect, test } from "vitest";

import { reverseInteger } from "./reverse-integer.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing palindromeNumber for test 1", () => {
	const result = reverseInteger(123);
	const expected = 321;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 2", () => {
	const result = reverseInteger(-123);
	const expected = -321;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 3", () => {
	const result = reverseInteger(120);
	const expected = 21;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 4", () => {
	const result = reverseInteger(-2142312343);
	const expected = 0;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 5", () => {
	const result = reverseInteger(21423255);
	const expected = 55232412;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 6", () => {
	const result = reverseInteger(100000000002);
	const expected = 0;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

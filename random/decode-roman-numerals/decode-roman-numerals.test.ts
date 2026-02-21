import { expect, expectTypeOf, test } from "vitest";

import { decodeRomanNumerals } from "./decode-roman-numerals.js";

test("testing decodeRomanNumerals for test 1", () => {
	const result = decodeRomanNumerals("MMCDXXI"); // cSpell: disable-line
	const expected = 2_421 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing decodeRomanNumerals for test 2", () => {
	const result = decodeRomanNumerals("XXXIX"); // cSpell: disable-line
	const expected = 39 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing decodeRomanNumerals for test 3", () => {
	const result = decodeRomanNumerals("DCCLXXXIX"); // cSpell: disable-line
	const expected = 789 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing decodeRomanNumerals for test 4", () => {
	const result = decodeRomanNumerals("CCXLVI"); // cSpell: disable-line
	const expected = 246 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing decodeRomanNumerals for test 5", () => {
	const result = decodeRomanNumerals("MDCCLXXVI"); // cSpell: disable-line
	const expected = 1776 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing decodeRomanNumerals for test 6", () => {
	const result = decodeRomanNumerals("MCMXVIII"); // cSpell: disable-line
	const expected = 1918 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing decodeRomanNumerals for test 7", () => {
	const result = decodeRomanNumerals("MCMXLIV"); // cSpell: disable-line
	const expected = 1944 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing decodeRomanNumerals for test 8", () => {
	const result = decodeRomanNumerals("MMXXV"); // cSpell: disable-line
	const expected = 2025 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing decodeRomanNumerals for test 9", () => {
	const result = decodeRomanNumerals("MMXXV" as string); // cSpell: disable-line
	const expected = 2025 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

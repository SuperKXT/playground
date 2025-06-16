import { assertType, expect, test } from "vitest";

import { decodeRomanNumerals } from "./decode-roman-numerals.js";

test("testing decodeRomanNumerals for test 1", () => {
	const result = decodeRomanNumerals("MMCDXXI"); // cSpell: disable-line
	const expected = 2_421 as number;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing decodeRomanNumerals for test 2", () => {
	const result = decodeRomanNumerals("XXXIX"); // cSpell: disable-line
	const expected = 39 as number;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing decodeRomanNumerals for test 3", () => {
	const result = decodeRomanNumerals("DCCLXXXIX"); // cSpell: disable-line
	const expected = 789 as number;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing decodeRomanNumerals for test 4", () => {
	const result = decodeRomanNumerals("CCXLVI"); // cSpell: disable-line
	const expected = 246 as number;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing decodeRomanNumerals for test 5", () => {
	const result = decodeRomanNumerals("MDCCLXXVI"); // cSpell: disable-line
	const expected = 1776 as number;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing decodeRomanNumerals for test 6", () => {
	const result = decodeRomanNumerals("MCMXVIII"); // cSpell: disable-line
	const expected = 1918 as number;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing decodeRomanNumerals for test 7", () => {
	const result = decodeRomanNumerals("MCMXLIV"); // cSpell: disable-line
	const expected = 1944 as number;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing decodeRomanNumerals for test 8", () => {
	const result = decodeRomanNumerals("MMXXV"); // cSpell: disable-line
	const expected = 2025 as number;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

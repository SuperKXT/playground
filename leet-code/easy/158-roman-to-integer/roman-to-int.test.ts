import { assertType, expect, test } from "vitest";

import { romanToInt } from "./roman-to-int.js";

test("testing romanToInt for test 1", () => {
	const result = romanToInt("MMCDXXI"); // cSpell: disable-line
	const expected = 2_421;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 2", () => {
	const result = romanToInt("XXXIX"); // cSpell: disable-line
	const expected = 39;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 3", () => {
	const result = romanToInt("DCCLXXXIX"); // cSpell: disable-line
	const expected = 789;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 4", () => {
	const result = romanToInt("CCXLVI"); // cSpell: disable-line
	const expected = 246;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 5", () => {
	const result = romanToInt("MDCCLXXVI"); // cSpell: disable-line
	const expected = 1776;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 6", () => {
	const result = romanToInt("MCMXVIII"); // cSpell: disable-line
	const expected = 1918;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 7", () => {
	const result = romanToInt("MCMXLIV"); // cSpell: disable-line
	const expected = 1944;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 8", () => {
	const result = romanToInt("MMXXV"); // cSpell: disable-line
	const expected = 2025;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 9", () => {
	const result = romanToInt("MMXXV" as string); // cSpell: disable-line
	const expected = 2025 as number;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 10", () => {
	const result = romanToInt("MCMXCIV"); // cSpell: disable-line
	const expected = 1994;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 11", () => {
	const result = romanToInt("LVIII"); // cSpell: disable-line
	const expected = 58;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing romanToInt for test 12", () => {
	const result = romanToInt("III"); // cSpell: disable-line
	const expected = 3;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

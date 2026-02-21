/* eslint-disable vitest/max-expects */
import { expect, expectTypeOf, test } from "vitest";

import { numberToWords } from "./format.helpers.js";

test("should test numberToWords", () => {
	const test1 = {
		response: numberToWords(0),
		expected: "zero",
	} as const;

	expect(test1.response).toStrictEqual(test1.expected);

	expectTypeOf(test1.response).toEqualTypeOf(test1.expected);

	const test2 = {
		response: numberToWords(1),
		expected: "one",
	} as const;

	expect(test2.response).toStrictEqual(test2.expected);

	expectTypeOf(test2.response).toEqualTypeOf(test2.expected);

	const test3 = {
		response: numberToWords(2),
		expected: "two",
	} as const;

	expect(test3.response).toStrictEqual(test3.expected);

	expectTypeOf(test3.response).toEqualTypeOf(test3.expected);

	const test4 = {
		response: numberToWords(3),
		expected: "three",
	} as const;

	expect(test4.response).toStrictEqual(test4.expected);

	expectTypeOf(test4.response).toEqualTypeOf(test4.expected);

	const test5 = {
		response: numberToWords(4),
		expected: "four",
	} as const;

	expect(test5.response).toStrictEqual(test5.expected);

	expectTypeOf(test5.response).toEqualTypeOf(test5.expected);

	const test6 = {
		response: numberToWords(5),
		expected: "five",
	} as const;

	expect(test6.response).toStrictEqual(test6.expected);

	expectTypeOf(test6.response).toEqualTypeOf(test6.expected);

	const test7 = {
		response: numberToWords(6),
		expected: "six",
	} as const;

	expect(test7.response).toStrictEqual(test7.expected);

	expectTypeOf(test7.response).toEqualTypeOf(test7.expected);

	const test8 = {
		response: numberToWords(7),
		expected: "seven",
	} as const;

	expect(test8.response).toStrictEqual(test8.expected);

	expectTypeOf(test8.response).toEqualTypeOf(test8.expected);

	const test9 = {
		response: numberToWords(8),
		expected: "eight",
	} as const;

	expect(test9.response).toStrictEqual(test9.expected);

	expectTypeOf(test9.response).toEqualTypeOf(test9.expected);

	const test10 = {
		response: numberToWords(9),
		expected: "nine",
	} as const;

	expect(test10.response).toStrictEqual(test10.expected);

	expectTypeOf(test10.response).toEqualTypeOf(test10.expected);

	const test11 = {
		response: numberToWords(10),
		expected: "ten",
	} as const;

	expect(test11.response).toStrictEqual(test11.expected);

	expectTypeOf(test11.response).toEqualTypeOf(test11.expected);

	const test12 = {
		response: numberToWords(11),
		expected: "eleven",
	} as const;

	expect(test12.response).toStrictEqual(test12.expected);

	expectTypeOf(test12.response).toEqualTypeOf(test12.expected);

	const test13 = {
		response: numberToWords(12),
		expected: "twelve",
	} as const;

	expect(test13.response).toStrictEqual(test13.expected);

	expectTypeOf(test13.response).toEqualTypeOf(test13.expected);

	const test14 = {
		response: numberToWords(13),
		expected: "thirteen",
	} as const;

	expect(test14.response).toStrictEqual(test14.expected);

	expectTypeOf(test14.response).toEqualTypeOf(test14.expected);

	const test15 = {
		response: numberToWords(14),
		expected: "fourteen",
	} as const;

	expect(test15.response).toStrictEqual(test15.expected);

	expectTypeOf(test15.response).toEqualTypeOf(test15.expected);

	const test16 = {
		response: numberToWords(15),
		expected: "fifteen",
	} as const;

	expect(test16.response).toStrictEqual(test16.expected);

	expectTypeOf(test16.response).toEqualTypeOf(test16.expected);

	const test17 = {
		response: numberToWords(16),
		expected: "sixteen",
	} as const;

	expect(test17.response).toStrictEqual(test17.expected);

	expectTypeOf(test17.response).toEqualTypeOf(test17.expected);

	const test18 = {
		response: numberToWords(17),
		expected: "seventeen",
	} as const;

	expect(test18.response).toStrictEqual(test18.expected);

	expectTypeOf(test18.response).toEqualTypeOf(test18.expected);

	const test19 = {
		response: numberToWords(18),
		expected: "eighteen",
	} as const;

	expect(test19.response).toStrictEqual(test19.expected);

	expectTypeOf(test19.response).toEqualTypeOf(test19.expected);

	const test20 = {
		response: numberToWords(19),
		expected: "nineteen",
	} as const;

	expect(test20.response).toStrictEqual(test20.expected);

	expectTypeOf(test20.response).toEqualTypeOf(test20.expected);

	const test21 = {
		response: numberToWords(20),
		expected: "twenty",
	} as const;

	expect(test21.response).toStrictEqual(test21.expected);

	expectTypeOf(test21.response).toEqualTypeOf(test21.expected);

	const test22 = {
		response: numberToWords(123_456_789),
		expected:
			"one hundred twenty three million, four hundred fifty six thousand, seven hundred eighty nine",
	} as const;

	expect(test22.response).toStrictEqual(test22.expected);

	expectTypeOf(test22.response).toEqualTypeOf(test22.expected);

	const test23 = {
		response: numberToWords(100_000),
		expected: "one hundred thousand",
	} as const;

	expect(test23.response).toStrictEqual(test23.expected);

	expectTypeOf(test23.response).toEqualTypeOf(test23.expected);

	const test24 = {
		response: numberToWords(-1_234_567_890),
		expected:
			"minus one billion, two hundred thirty four million, five hundred sixty seven thousand, eight hundred ninety",
	} as const;

	expect(test24.response).toStrictEqual(test24.expected);

	expectTypeOf(test24.response).toEqualTypeOf(test24.expected);

	const test25 = {
		response: numberToWords(420),
		expected: "four hundred twenty",
	} as const;

	expect(test25.response).toStrictEqual(test25.expected);

	expectTypeOf(test25.response).toEqualTypeOf(test25.expected);

	const test26 = {
		response: numberToWords(10_423.2978),
		expected:
			"ten thousand, four hundred twenty three point two nine seven eight",
	} as const;

	expect(test26.response).toStrictEqual(test26.expected);

	expectTypeOf(test26.response).toEqualTypeOf(test26.expected);

	const test27 = {
		response: numberToWords(43000 as number),
		expected: "forty three thousand" as string,
	} as const;

	expect(test27.response).toStrictEqual(test27.expected);

	expectTypeOf(test27.response).toEqualTypeOf(test27.expected);

	const test28 = {
		response: numberToWords(-1_234_567_890_123_456),
		expected:
			"minus one quadrillion, two hundred thirty four trillion, five hundred sixty seven billion, eight hundred ninety million, one hundred twenty three thousand, four hundred fifty six",
	} as const;

	expect(test28.response).toStrictEqual(test28.expected);

	expectTypeOf(test28.response).toEqualTypeOf(test28.expected);
});

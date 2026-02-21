import { expect, expectTypeOf, test } from "vitest";

import { stringToInteger } from "./string-to-integer.js";

test("testing stringToInteger for test 1", () => {
	const result = stringToInteger("42");
	const expected = 42 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing stringToInteger for test 2", () => {
	const result = stringToInteger("-042");
	const expected = -42 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing stringToInteger for test 3", () => {
	const result = stringToInteger("1337c0d3");
	const expected = 1337 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing stringToInteger for test 4", () => {
	const result = stringToInteger("0-1");
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing stringToInteger for test 5", () => {
	const result = stringToInteger("words and 987");
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing stringToInteger for test 6", () => {
	const result = stringToInteger("   +0 123");
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing stringToInteger for test 7", () => {
	const result = stringToInteger("    -88827   5655  U");
	const expected = -88827 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

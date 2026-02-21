import { expect, expectTypeOf, test } from "vitest";

import { uglyNumber } from "./ugly-number.js";

test("testing uglyNumber for test 1", () => {
	const result = uglyNumber(6);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing uglyNumber for test 2", () => {
	const result = uglyNumber(1);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing uglyNumber for test 3", () => {
	const result = uglyNumber(14);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing uglyNumber for test 4", () => {
	const result = uglyNumber(0);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

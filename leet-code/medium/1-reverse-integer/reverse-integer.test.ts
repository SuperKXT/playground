import { expect, expectTypeOf, test } from "vitest";

import { reverseInteger } from "./reverse-integer.js";

test("testing reverseInteger for test 1", () => {
	const result = reverseInteger(123);
	const expected = 321 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseInteger for test 2", () => {
	const result = reverseInteger(-123);
	const expected = -321 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseInteger for test 3", () => {
	const result = reverseInteger(120);
	const expected = 21 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseInteger for test 4", () => {
	const result = reverseInteger(-2142312343);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseInteger for test 5", () => {
	const result = reverseInteger(21423255);
	const expected = 55232412 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseInteger for test 6", () => {
	const result = reverseInteger(100000000002);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

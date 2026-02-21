import { expect, expectTypeOf, test } from "vitest";

import { gcdArray } from "./gcd-array.js";

test("testing gcdArray for test 1", () => {
	const result = gcdArray([2, 5, 6, 9, 10]);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing gcdArray for test 2", () => {
	const result = gcdArray([7, 5, 6, 8, 3]);
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing gcdArray for test 3", () => {
	const result = gcdArray([3, 3]);
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

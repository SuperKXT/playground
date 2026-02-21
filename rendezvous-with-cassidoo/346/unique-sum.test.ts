import { expect, expectTypeOf, test } from "vitest";

import { uniqueSum } from "./unique-sum.js";

test("testing uniqueSum against test 1", () => {
	const result = uniqueSum([1, 2, 3]);
	const expected = 6 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing uniqueSum against test 2", () => {
	const result = uniqueSum([11, 22, 33]);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing uniqueSum against test 3", () => {
	const result = uniqueSum([101, 2, 3]);
	const expected = 5 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

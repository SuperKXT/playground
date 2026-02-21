import { expect, expectTypeOf, test } from "vitest";

import { singleNumber } from "./single-number.js";

test("testing singleNumber for test 1", () => {
	const result = singleNumber([2, 2, 1]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing singleNumber for test 2", () => {
	const result = singleNumber([4, 1, 2, 1, 2]);
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing singleNumber for test 3", () => {
	const result = singleNumber([1]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing singleNumber for test 4", () => {
	const result = singleNumber([1, 1]);
	const expected = null;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

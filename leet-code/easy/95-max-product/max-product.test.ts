import { expect, expectTypeOf, test } from "vitest";

import { maxProduct } from "./max-product.js";

test("testing maxWords for test 1", () => {
	const result = maxProduct([1, 2, 3]);
	const expected = 6 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxWords for test 2", () => {
	const result = maxProduct([4, 3, 1, 2]);
	const expected = 24 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxWords for test 3", () => {
	const result = maxProduct([-1, -2, -3]);
	const expected = -6 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxWords for test 4", () => {
	const result = maxProduct([-10, -30, 5, 2, 20, 10, 1, 7]);
	const expected = 6000 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { expect, expectTypeOf, test } from "vitest";

import { isBitonic } from "./is-bitonic.js";

test("testing isBitonic against test 1", () => {
	const result = isBitonic([1, 2, 3, 2]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isBitonic against test 2", () => {
	const result = isBitonic([1, 2, 3]);
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isBitonic against test 3", () => {
	const result = isBitonic([3, 4, 5, 5, 5, 2, 1]);
	const expected = 5 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isBitonic against test 4", () => {
	const result = isBitonic([]);
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isBitonic against test 5", () => {
	const result = isBitonic([5, 4, 3]);
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isBitonic against test 6", () => {
	const result = isBitonic([2, 2]);
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isBitonic against test 7", () => {
	const result = isBitonic([1, 2, 3, 2, 3]);
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

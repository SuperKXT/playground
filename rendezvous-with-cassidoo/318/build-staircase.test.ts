import { expect, expectTypeOf, test } from "vitest";

import { buildStaircase } from "./build-staircase.js";

test("testing buildStaircase against test 1", () => {
	const result = buildStaircase(6);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing buildStaircase against test 2", () => {
	const result = buildStaircase(9);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing buildStaircase against test 3", () => {
	const result = buildStaircase(12);
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing buildStaircase against test 4", () => {
	const result = buildStaircase(57);
	const expected = 10 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing buildStaircase against test 5", () => {
	const result = buildStaircase(67);
	const expected = 11 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

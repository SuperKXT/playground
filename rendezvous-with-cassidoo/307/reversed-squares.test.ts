import { expect, expectTypeOf, test } from "vitest";

import { reversedSquare } from "./reversed-squares.js";

test("testing reversedSquares against test 1", () => {
	const result = reversedSquare(9);

	expect(result).toBe(true);

	expectTypeOf(result).toEqualTypeOf<true>();
});

test("testing reversedSquares against test 2", () => {
	const result = reversedSquare(10);

	expect(result).toBe(false);

	expectTypeOf(result).toEqualTypeOf<false>();
});

test("testing reversedSquares against test 3", () => {
	const result = reversedSquare(441);

	expect(result).toBe(true);

	expectTypeOf(result).toEqualTypeOf<true>();
});

test("testing reversedSquares against test 4", () => {
	const result = reversedSquare(25);

	expect(result).toBe(false);

	expectTypeOf(result).toEqualTypeOf<false>();
});

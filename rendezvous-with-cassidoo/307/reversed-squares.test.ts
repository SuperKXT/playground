import { assertType, expect, test } from "vitest";

import { reversedSquare } from "./reversed-squares.js";

test("testing reversedSquares against test 1", () => {
	const result = reversedSquare(9);

	expect(result).toBe(true);

	assertType<true>(result);
});

test("testing reversedSquares against test 2", () => {
	const result = reversedSquare(10);

	expect(result).toBe(false);

	assertType<false>(result);
});

test("testing reversedSquares against test 3", () => {
	const result = reversedSquare(441);

	expect(result).toBe(true);

	assertType<true>(result);
});

test("testing reversedSquares against test 4", () => {
	const result = reversedSquare(25);

	expect(result).toBe(false);

	assertType<false>(result);
});

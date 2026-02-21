import { expect, expectTypeOf, test } from "vitest";

import { numRookCaptures } from "./rook-captures.js";

test("testing numRookCaptures for test 1", () => {
	const result = numRookCaptures([
		[".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", "p", ".", ".", ".", "."],
		[".", ".", ".", "R", ".", ".", ".", "p"],
		[".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", "p", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", "."],
	]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing numRookCaptures for test 2", () => {
	const result = numRookCaptures([
		[".", ".", ".", ".", ".", ".", "."],
		[".", "p", "p", "p", "p", "p", ".", "."],
		[".", "p", "p", "B", "p", "p", ".", "."],
		[".", "p", "B", "R", "B", "p", ".", "."],
		[".", "p", "p", "B", "p", "p", ".", "."],
		[".", "p", "p", "p", "p", "p", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", "."],
	]);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing numRookCaptures for test 3", () => {
	const result = numRookCaptures([
		[".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", "p", ".", ".", ".", "."],
		[".", ".", ".", "p", ".", ".", ".", "."],
		["p", "p", ".", "R", ".", "p", "B", "."],
		[".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", "B", ".", ".", ".", "."],
		[".", ".", ".", "p", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", "."],
	]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { expect, expectTypeOf, test } from "vitest";

import { numberOfShips } from "./number-of-ships.js";

test("testing numberOfShips against test 1", () => {
	const result = numberOfShips([
		["X", "X", ".", "X"],
		[".", ".", ".", "X"],
		[".", ".", ".", "X"],
		[".", ".", ".", "."],
	]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing numberOfShips against test 2", () => {
	const result = numberOfShips([
		["X", "X", ".", "X"],
		[".", ".", ".", "X"],
		[".", ".", ".", "."],
		[".", "X", "X", "."],
		[".", ".", ".", "."],
		["X", "X", "X", "X"],
	]);
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

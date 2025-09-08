import { assertType, expect, test } from "vitest";

import { numberOfShips } from "./number-of-ships.js";

import type { Utils } from "../../types/utils.types.js";

test("testing numberOfShips against test 1", () => {
	const result = numberOfShips([
		["X", "X", ".", "X"],
		[".", ".", ".", "X"],
		[".", ".", ".", "X"],
		[".", ".", ".", "."],
	]);
	const expected = 2;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
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
	const expected = 4;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

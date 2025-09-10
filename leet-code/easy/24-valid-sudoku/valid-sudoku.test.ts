import { assertType, expect, test } from "vitest";

import { isValidSudoku } from "./valid-sudoku.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing isValidSudoku for test 1", () => {
	const result = isValidSudoku([
		["5", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	]);
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing isValidSudoku for test 2", () => {
	const result = isValidSudoku([
		["8", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	]);
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

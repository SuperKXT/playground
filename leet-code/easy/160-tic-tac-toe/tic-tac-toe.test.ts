import { assertType, expect, test } from "vitest";

import { ticTacToe } from "./tic-tac-toe.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing ticTacToe for test 1", () => {
	const result = ticTacToe([
		[0, 0],
		[2, 0],
		[1, 1],
		[2, 1],
		[2, 2],
	]);
	const expected = "A" as "A" | "B" | "Pending" | "Draw";
	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing ticTacToe for test 2", () => {
	const result = ticTacToe([
		[0, 0],
		[1, 1],
		[0, 1],
		[0, 2],
		[1, 0],
		[2, 0],
	]);
	const expected = "B" as "A" | "B" | "Pending" | "Draw";
	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing ticTacToe for test 3", () => {
	const result = ticTacToe([
		[0, 0],
		[1, 1],
		[2, 0],
		[1, 0],
		[1, 2],
		[2, 1],
		[0, 1],
		[0, 2],
		[2, 2],
	]);
	const expected = "Draw" as "A" | "B" | "Pending" | "Draw";
	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing ticTacToe for test 4", () => {
	const result = ticTacToe([
		[0, 0],
		[1, 1],
		[2, 0],
		[1, 0],
		[1, 2],
		[2, 1],
		[0, 1],
		[0, 2],
	]);
	const expected = "Pending" as "A" | "B" | "Pending" | "Draw";
	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

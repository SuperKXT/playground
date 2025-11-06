import { assertType, expect, test } from "vitest";

import { knightMoves } from "./knight-moves.js";

import type { Utils } from "../../types/utils.types.js";

test("testing knightMoves against test 1", () => {
	const result = knightMoves([4, 4]);
	const expected: Array<[number, number]> = [
		[2, 3],
		[2, 5],
		[3, 2],
		[3, 6],
		[5, 2],
		[5, 6],
		[6, 3],
		[6, 5],
	];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing knightMoves against test 2", () => {
	const result = knightMoves([0, 0]);
	const expected: Array<[number, number]> = [
		[1, 2],
		[2, 1],
	];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing knightMoves against test 3", () => {
	const result = knightMoves([1, 2]);
	const expected: Array<[number, number]> = [
		[0, 0],
		[0, 4],
		[2, 0],
		[2, 4],
		[3, 1],
		[3, 3],
	];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

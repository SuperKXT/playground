import { assertType, expect, test } from "vitest";

import { numRookCaptures } from "./rook-captures.js";

import type { Utils } from "../../../types/utils.types.js";

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
	const expected = 3;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
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
	const expected = 0;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
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
	const expected = 3;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

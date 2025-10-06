import { assertType, expect, test } from "vitest";

import { longestHarmoniousSubsequence } from "./longest-harmonious-subsequence.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing longestHarmoniousSubsequence for test 1", () => {
	const result = longestHarmoniousSubsequence([1, 3, 2, 2, 5, 2, 3, 7]);
	const expected = 5 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestHarmoniousSubsequence for test 2", () => {
	const result = longestHarmoniousSubsequence([1, 2, 3, 4]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestHarmoniousSubsequence for test 3", () => {
	const result = longestHarmoniousSubsequence([1, 1, 1, 1]);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestHarmoniousSubsequence for test 4", () => {
	const result = longestHarmoniousSubsequence([1, 2, 2, 1]);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

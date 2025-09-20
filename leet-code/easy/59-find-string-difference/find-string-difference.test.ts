import { assertType, expect, test } from "vitest";

import { findStringDifference } from "./find-string-difference.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing findStringDifference for test 1", () => {
	const result = findStringDifference("abcd", "abcde");
	const expected = "e";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing findStringDifference for test 2", () => {
	const result = findStringDifference("", "y");
	const expected = "y";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing findStringDifference for test 2", () => {
	const result = findStringDifference("a", "aa");
	const expected = "a";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing findStringDifference for test 2", () => {
	const result = findStringDifference("aa", "aab");
	const expected = "b";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

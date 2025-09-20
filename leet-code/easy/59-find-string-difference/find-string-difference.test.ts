import { assertType, expect, test } from "vitest";

import { findStringDifference } from "./find-string-difference.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing findStringDifference for test 1", () => {
	const result = findStringDifference("abcd", "abcde");
	const expected = "e" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing findStringDifference for test 2", () => {
	const result = findStringDifference("", "y");
	const expected = "y" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing findStringDifference for test 2", () => {
	const result = findStringDifference("a", "aa");
	const expected = "a" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing findStringDifference for test 2", () => {
	const result = findStringDifference("aa", "aab");
	const expected = "b" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

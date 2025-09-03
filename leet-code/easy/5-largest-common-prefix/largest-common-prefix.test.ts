import { assertType, expect, test } from "vitest";

import { longestCommonPrefix } from "./largest-common-prefix.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing palindromeNumber for test 1", () => {
	const result = longestCommonPrefix(["flower", "flow", "flight"]);
	const expected = "fl";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestCommonPrefix for test 2", () => {
	const result = longestCommonPrefix(["dog", "race car", "car"]);
	const expected = "";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestCommonPrefix for test 3", () => {
	const result = longestCommonPrefix([]);
	const expected = "";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

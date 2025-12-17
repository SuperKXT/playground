import { assertType, expect, test } from "vitest";

import { gcdStrings } from "./gcd-strings.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing gcdStrings for test 1", () => {
	const result = gcdStrings("ABCABC", "ABC"); // cSpell: disable-line
	const expected = "ABC";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcdStrings for test 2", () => {
	const result = gcdStrings("ABABAB", "ABAB"); // cSpell: disable-line
	const expected = "AB";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcdStrings for test 3", () => {
	const result = gcdStrings("LEET", "CODE"); // cSpell: disable-line
	const expected = "";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcdStrings for test 4", () => {
	const result = gcdStrings("AAAAAB", "AAA"); // cSpell: disable-line
	const expected = "";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

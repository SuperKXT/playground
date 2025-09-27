import { assertType, expect, test } from "vitest";

import { repeatedSubstringPattern } from "./repeated-substring-pattern.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing repeatedSubstringPattern for test 1", () => {
	const result = repeatedSubstringPattern("abab");
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing repeatedSubstringPattern for test 2", () => {
	const result = repeatedSubstringPattern("aba");
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing repeatedSubstringPattern for test 2", () => {
	const result = repeatedSubstringPattern("abcabcabcabc"); // cSpell: disable-line
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { assertType, expect, test } from "vitest";

import { validPalindrome } from "./valid-palindrome-ii.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing validPalindrome for test 1", () => {
	const result = validPalindrome("aba");
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing validPalindrome for test 2", () => {
	const result = validPalindrome("abca"); // cSpell: disable-line
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing validPalindrome for test 3", () => {
	const result = validPalindrome("abc"); // cSpell: disable-line
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing validPalindrome for test 4", () => {
	const result = validPalindrome("eccer"); // cSpell: disable-line
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing validPalindrome for test 5", () => {
	const result = validPalindrome("deeee"); // cSpell: disable-line
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing validPalindrome for test 6", () => {
	const result = validPalindrome("ecrrcre"); // cSpell: disable-line
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

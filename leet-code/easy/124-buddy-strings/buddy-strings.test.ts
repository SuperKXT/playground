import { assertType, expect, test } from "vitest";

import { buddyStrings } from "./buddy-strings.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing buddyStrings for test 1", () => {
	const result = buddyStrings("ab", "ba");
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing buddyStrings for test 2", () => {
	const result = buddyStrings("ab", "ab");
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing buddyStrings for test 3", () => {
	const result = buddyStrings("aa", "aa");
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing buddyStrings for test 4", () => {
	const result = buddyStrings("abcde", "adcbe"); // cSpell: disable-line
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

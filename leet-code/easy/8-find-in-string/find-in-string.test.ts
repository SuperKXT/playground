import { assertType, expect, test } from "vitest";

import { findInString } from "./find-in-string.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing findInString for test 1", () => {
	const result = findInString("sadbutsad", "sad"); // cSpell: disable-line
	const expected = 0;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing findInString for test 2", () => {
	const result = findInString("leetcode", "leeto"); // cSpell: disable-line
	const expected = -1;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing findInString for test 3", () => {
	const result = findInString("fooBarBaz", "Bar"); // cSpell: disable-line
	const expected = 3;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

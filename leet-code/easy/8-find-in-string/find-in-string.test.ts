import { expect, expectTypeOf, test } from "vitest";

import { findInString } from "./find-in-string.js";

test("testing findInString for test 1", () => {
	const result = findInString("sadbutsad", "sad"); // cSpell: disable-line
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing findInString for test 2", () => {
	const result = findInString("leetcode", "leeto"); // cSpell: disable-line
	const expected = -1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing findInString for test 3", () => {
	const result = findInString("fooBarBaz", "Bar"); // cSpell: disable-line
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

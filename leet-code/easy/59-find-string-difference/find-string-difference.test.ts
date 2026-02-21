import { expect, expectTypeOf, test } from "vitest";

import { findStringDifference } from "./find-string-difference.js";

test("testing findStringDifference for test 1", () => {
	const result = findStringDifference("abcd", "abcde");
	const expected = "e" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing findStringDifference for test 2", () => {
	const result = findStringDifference("", "y");
	const expected = "y" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing findStringDifference for test 3", () => {
	const result = findStringDifference("a", "aa");
	const expected = "a" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing findStringDifference for test 4", () => {
	const result = findStringDifference("aa", "aab");
	const expected = "b" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

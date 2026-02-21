import { expect, expectTypeOf, test } from "vitest";

import { longestCommonPrefix } from "./largest-common-prefix.js";

test("testing palindromeNumber for test 1", () => {
	const result = longestCommonPrefix(["flower", "flow", "flight"]);
	const expected = "fl" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longestCommonPrefix for test 2", () => {
	const result = longestCommonPrefix(["dog", "race car", "car"]);
	const expected = "" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longestCommonPrefix for test 3", () => {
	const result = longestCommonPrefix([]);
	const expected = "" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

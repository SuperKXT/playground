import { expect, expectTypeOf, test } from "vitest";

import { isSubsequence } from "./is-subsequence.js";

test("testing isSubsequence for test 1", () => {
	const result = isSubsequence("abc", "ahbgdc"); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isSubsequence for test 2", () => {
	const result = isSubsequence("axc", "ahbgdc"); // cSpell: disable-line
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing isSubsequence for test 3", () => {
	const result = isSubsequence("", "ahbgdc"); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

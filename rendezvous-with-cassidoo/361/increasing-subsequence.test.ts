import { expect, expectTypeOf, test } from "vitest";

import { increasingSubsequence } from "./increasing-subsequence.js";

test("testing increasingSubsequence against test 1", () => {
	const result = increasingSubsequence([10, 9, 2, 3, 7, 101, 18]);
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing increasingSubsequence against test 2", () => {
	const result = increasingSubsequence([4, 4, 4, 4, 3]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

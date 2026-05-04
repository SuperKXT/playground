import { expect, expectTypeOf, test } from "vitest";

import { longestCoPrimeSubsequence } from "./min-repairs.js";

test("testing longestCoPrimeSubsequence against test 1", () => {
	const result = longestCoPrimeSubsequence([6, 12, 4, 8]);
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing longestCoPrimeSubsequence against test 2", () => {
	const result = longestCoPrimeSubsequence([4, 3, 6, 9, 7, 2]);
	const expected = 4 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

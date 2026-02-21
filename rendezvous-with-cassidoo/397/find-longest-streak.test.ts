import { expect, expectTypeOf, test } from "vitest";

import { findLongestStreak } from "./find-longest-streak.js";

test("testing shieldBreak against test 1", () => {
	const result = findLongestStreak([true, true, false, true, true, true], 3);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing shieldBreak against test 2", () => {
	const result = findLongestStreak([true, true, true, false, true], 4);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing shieldBreak against test 3", () => {
	const result = findLongestStreak([true, true, true, true], 2);
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

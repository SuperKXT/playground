import { assertType, expect, test } from "vitest";

import { findLongestStreak } from "./find-longest-streak.js";

test("testing shieldBreak against test 1", () => {
	const result = findLongestStreak([true, true, false, true, true, true], 3);
	const expected = 3;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing shieldBreak against test 2", () => {
	const result = findLongestStreak([true, true, true, false, true], 4);
	const expected = 0;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing shieldBreak against test 3", () => {
	const result = findLongestStreak([true, true, true, true], 2);
	const expected = 4;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

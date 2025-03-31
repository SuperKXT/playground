import { assertType, expect, test } from "vitest";

import { findLongestTimeGap } from "./find-longest-time-gap.js";

test("testing findLongestTimeGap against test 1", () => {
	const result = findLongestTimeGap(["12:00"]);
	const expected = 0;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing findLongestTimeGap against test 2", () => {
	const result = findLongestTimeGap(["09:00", "11:00"]);
	const expected = 120;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing findLongestTimeGap against test 3", () => {
	const result = findLongestTimeGap(["14:00", "09:00", "15:00", "10:30"]);
	const expected = 360;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing findLongestTimeGap against test 4", () => {
	const result = findLongestTimeGap(["08:00", "10:00", "10:00", "14:00"]);
	const expected = 240;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

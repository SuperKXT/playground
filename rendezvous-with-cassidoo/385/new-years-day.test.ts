import { expect, expectTypeOf, test } from "vitest";

import { newYearsDay } from "./new-years-day.js";

import type { TDay } from "./new-years-day.js";

test("testing newYearsDay 1", () => {
	const result = newYearsDay(2025);
	const expected = "Wednesday" as TDay;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing newYearsDay 2", () => {
	const result = newYearsDay(2024);
	const expected = "Monday" as TDay;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

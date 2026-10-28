import { expect, expectTypeOf, test } from "vitest";

import { getSundays } from "./get-sundays.js";

test("testing getSundays against test 1", () => {
	const result = getSundays(2026, 9);
	const expected = ["2026-09-06", "2026-09-13", "2026-09-20", "2026-09-27"];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing getSundays against test 2", () => {
	const result = getSundays(2024, 2);
	const expected = ["2024-02-04", "2024-02-11", "2024-02-18", "2024-02-25"];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

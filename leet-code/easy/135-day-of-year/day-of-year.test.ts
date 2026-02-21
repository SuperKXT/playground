import { expect, expectTypeOf, test } from "vitest";

import { dayOfYear } from "./day-of-year.js";

test("testing dayOfYear for test 1", () => {
	const result = dayOfYear("2019-01-09");
	const expected = 9 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing dayOfYear for test 2", () => {
	const result = dayOfYear("2019-02-10");
	const expected = 41 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

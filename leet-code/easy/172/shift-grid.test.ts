import { expect, expectTypeOf, test } from "vitest";

import type { Utils } from "../../../types/utils.types.js";

import { dayOfTheWeek } from "./shift-grid.js";

test("testing dayOfTheWeek for test 1", () => {
	const result = dayOfTheWeek(31, 8, 2019);
	const expected = "Saturday";

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing dayOfTheWeek for test 2", () => {
	const result = dayOfTheWeek(18, 7, 1999);
	const expected = "Sunday";

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing dayOfTheWeek for test 3", () => {
	const result = dayOfTheWeek(15, 8, 1993);
	const expected = "Sunday";

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

import { expect, expectTypeOf, test } from "vitest";

import { perfectMonth } from "./perfect-month.js";

test("testing perfectMonth against test 1", () => {
	const result = perfectMonth(2025);
	const expected = { prev: "2021-02", next: "2026-02" };

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing perfectMonth against test 2", () => {
	const result = perfectMonth(2026);
	const expected = { prev: "2026-02", next: "2027-02" };

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

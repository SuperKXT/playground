import { expect, expectTypeOf, test } from "vitest";

import { kindOfNumber } from "./kind-of-number.js";

test("testing kindOfNumber against test 1", () => {
	const result = kindOfNumber(6);
	const expected = "perfect" as "perfect" | "abundant" | "deficient";

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing kindOfNumber against test 2", () => {
	const result = kindOfNumber(12);
	const expected = "abundant" as "perfect" | "abundant" | "deficient";

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing kindOfNumber against test 3", () => {
	const result = kindOfNumber(4);
	const expected = "deficient" as "perfect" | "abundant" | "deficient";

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

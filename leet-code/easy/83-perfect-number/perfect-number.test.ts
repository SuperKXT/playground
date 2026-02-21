import { expect, expectTypeOf, test } from "vitest";

import { perfectNumber } from "./perfect-number.js";

test("testing relativeRanks for test 1", () => {
	const result = perfectNumber(28);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing relativeRanks for test 2", () => {
	const result = perfectNumber(7);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing relativeRanks for test 3", () => {
	const result = perfectNumber(1);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

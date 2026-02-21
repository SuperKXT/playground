import { expect, expectTypeOf, test } from "vitest";

import { happyNumber } from "./happy-number.js";

test("testing happyNumber for test 1", () => {
	const result = happyNumber(19);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing happyNumber for test 2", () => {
	const result = happyNumber(2);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

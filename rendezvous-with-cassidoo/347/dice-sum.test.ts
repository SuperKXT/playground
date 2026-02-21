import { expect, expectTypeOf, test } from "vitest";

import { diceSum } from "./dice-sum.js";

test("testing diceSum against test 1", () => {
	const result = diceSum(1, 6, 3);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing diceSum against test 2", () => {
	const result = diceSum(2, 6, 7);
	const expected = 6 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { assertType, expect, test } from "vitest";

import { reverseOnlyLetters } from "./min-cost-climbing-stairs.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing minCostClimbingStairs for test 1", () => {
	const result = reverseOnlyLetters([10, 15, 20]);
	const expected = 15 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing minCostClimbingStairs for test 2", () => {
	const result = reverseOnlyLetters([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
	const expected = 6 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

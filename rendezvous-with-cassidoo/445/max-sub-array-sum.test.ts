import { expect, expectTypeOf, test } from "vitest";

import { maxSubArraySum } from "./max-sub-array-sum.js";

import type { Utils } from "../../types/utils.types.js";

test("testing maxSubArraySum against test 1", () => {
	const result = maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
	const expected = 6 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing maxSubArraySum against test 2", () => {
	const result = maxSubArraySum([5]);
	const expected = 5 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing maxSubArraySum against test 3", () => {
	const result = maxSubArraySum([-1, -2, -3, -4]);
	const expected = -1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing maxSubArraySum against test 4", () => {
	const result = maxSubArraySum([5, 4, -1, 7, 8]);
	const expected = 23 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

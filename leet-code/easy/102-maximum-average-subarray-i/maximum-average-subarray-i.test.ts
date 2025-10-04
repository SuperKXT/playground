import { assertType, expect, test } from "vitest";

import { maximumAverageSubarray } from "./maximum-average-subarray-i.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing maximumAverageSubarray for test 1", () => {
	const result = maximumAverageSubarray([1, 12, -5, -6, 50, 3], 4);
	const expected = 12.75 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing maximumAverageSubarray for test 2", () => {
	const result = maximumAverageSubarray([5], 1);
	const expected = 5.0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

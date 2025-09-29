import { assertType, expect, test } from "vitest";

import { maxConsecutiveOnes } from "./max-consecutive-ones.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing maxConsecutiveOnes for test 1", () => {
	const result = maxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing maxConsecutiveOnes for test 2", () => {
	const result = maxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
	const expected = 3 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

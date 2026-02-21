import { expect, expectTypeOf, test } from "vitest";

import { maxConsecutiveOnes } from "./max-consecutive-ones.js";

test("testing maxConsecutiveOnes for test 1", () => {
	const result = maxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxConsecutiveOnes for test 2", () => {
	const result = maxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

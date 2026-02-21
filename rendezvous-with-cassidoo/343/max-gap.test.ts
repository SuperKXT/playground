import { expect, expectTypeOf, test } from "vitest";

import { maxGap } from "./max-gap.js";

test("testing removeDigit against test 1", () => {
	const result = maxGap([3, 6, 9, 1, 2]);
	const expected = 3 as const;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing removeDigit against test 2", () => {
	const result = maxGap([1, 10, 12, 30, 32]);
	const expected = 18 as const;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

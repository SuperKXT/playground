import { expect, expectTypeOf, test } from "vitest";

import { distributeCandies } from "./distribute-candies.js";

test("testing distributeCandies for test 1", () => {
	const result = distributeCandies([1, 1, 2, 2, 3, 3]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing distributeCandies for test 2", () => {
	const result = distributeCandies([1, 1, 2, 3]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing distributeCandies for test 3", () => {
	const result = distributeCandies([6, 6, 6, 6]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing distributeCandies for test 4", () => {
	const result = distributeCandies([2, 1, 2, 3]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

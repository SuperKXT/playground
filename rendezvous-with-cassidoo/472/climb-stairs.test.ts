import { expect, expectTypeOf, test } from "vitest";

import { climbStairs } from "./climb-stairs.js";

test("testing climbStairs against test 1", () => {
	const result = climbStairs(2);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Readonly<typeof result>>(result).toEqualTypeOf(expected);
});

test("testing climbStairs against test 2", () => {
	const result = climbStairs(4);
	const expected = 5 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Readonly<typeof result>>(result).toEqualTypeOf(expected);
});

test("testing climbStairs against test 3", () => {
	const result = climbStairs(10);
	const expected = 89 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Readonly<typeof result>>(result).toEqualTypeOf(expected);
});

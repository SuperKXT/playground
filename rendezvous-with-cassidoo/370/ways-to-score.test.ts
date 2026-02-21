import { expect, expectTypeOf, test } from "vitest";

import { waysToScore } from "./ways-to-score.js";

test("testing waysToScore against test 1", () => {
	const result = waysToScore(5);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing waysToScore against test 2", () => {
	const result = waysToScore(12);
	const expected = 6 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing waysToScore against test 3", () => {
	const result = waysToScore(6);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

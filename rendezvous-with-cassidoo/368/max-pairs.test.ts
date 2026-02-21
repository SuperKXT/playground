import { expect, expectTypeOf, test } from "vitest";

import { maxPairs } from "./max-pairs.js";

test("testing maxPairs against test 1", () => {
	const result = maxPairs(["L-10", "R-10", "L-11", "R-10", "L-10", "R-11"]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxPairs against test 2", () => {
	const result = maxPairs(["L-10", "L-11", "L-12", "L-13"]);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxPairs against test 3", () => {
	const result = maxPairs(["L-8", "L-8", "L-8", "R-8"]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

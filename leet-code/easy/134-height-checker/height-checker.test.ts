import { expect, expectTypeOf, test } from "vitest";

import { heightChecker } from "./height-checker.js";

test("testing heightChecker for test 1", () => {
	const result = heightChecker([1, 1, 4, 2, 1, 3]);
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing heightChecker for test 2", () => {
	const result = heightChecker([5, 1, 2, 3, 4]);
	const expected = 5 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing heightChecker for test 3", () => {
	const result = heightChecker([1, 2, 3, 4, 5]);
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

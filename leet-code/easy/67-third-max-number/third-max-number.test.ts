import { expect, expectTypeOf, test } from "vitest";

import { thirdMaxNumber } from "./third-max-number.js";

test("testing thirdMaxNumber for test 1", () => {
	const result = thirdMaxNumber([3, 2, 1]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing thirdMaxNumber for test 2", () => {
	const result = thirdMaxNumber([1, 2]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing thirdMaxNumber for test 3", () => {
	const result = thirdMaxNumber([2, 2, 3, 1]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

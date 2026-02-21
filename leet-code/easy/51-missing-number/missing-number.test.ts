import { expect, expectTypeOf, test } from "vitest";

import { missingNumber } from "./missing-number.js";

test("testing missingNumber for test 1", () => {
	const result = missingNumber([3, 0, 1]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing missingNumber for test 2", () => {
	const result = missingNumber([0, 1]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing missingNumber for test 3", () => {
	const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
	const expected = 8 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { expect, expectTypeOf, test } from "vitest";

import { minDistance } from "./min-distance.js";

test("testing minDistance against test 1", () => {
	const result = minDistance([3, 8, 10, 15], 9);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing minDistance against test 2", () => {
	const result = minDistance([5, 9, 14, 18], 4);
	const expected = -1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

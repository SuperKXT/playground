import { expect, expectTypeOf, test } from "vitest";

import { validMountainArray } from "./valid-mountain-array.js";

test("testing validMountainArray for test 1", () => {
	const result = validMountainArray([2, 1]);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing validMountainArray for test 2", () => {
	const result = validMountainArray([3, 5, 5]);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing validMountainArray for test 3", () => {
	const result = validMountainArray([0, 3, 2, 1]);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

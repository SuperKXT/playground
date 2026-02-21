import { expect, expectTypeOf, test } from "vitest";

import { canPlaceFlowers } from "./can-place-flowers.js";

test("testing canPlaceFlowers for test 1", () => {
	const result = canPlaceFlowers([1, 0, 0, 0, 1], 1);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing canPlaceFlowers for test 2", () => {
	const result = canPlaceFlowers([1, 0, 0, 0, 1], 2);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing canPlaceFlowers for test 3", () => {
	const result = canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing canPlaceFlowers for test 4", () => {
	const result = canPlaceFlowers([0, 1, 0, 1, 0, 1, 0, 0], 1);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

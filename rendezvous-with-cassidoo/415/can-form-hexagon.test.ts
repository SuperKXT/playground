import { expect, expectTypeOf, test } from "vitest";

import { canFormHexagon } from "./can-form-hexagon.js";

test("testing canFormHexagon against test 1", () => {
	const result = canFormHexagon([2, 3, 8, 8, 2, 3]);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing canFormHexagon against test 2", () => {
	const result = canFormHexagon([1, 2, 3, 4, 5, 6]);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing canFormHexagon against test 3", () => {
	const result = canFormHexagon([2, 2, 2, 2, 2, 2, 2]);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

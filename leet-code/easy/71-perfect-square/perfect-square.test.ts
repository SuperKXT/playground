import { expect, expectTypeOf, test } from "vitest";

import { perfectSquare } from "./perfect-square.js";

test("testing perfectSquare for test 1", () => {
	const result = perfectSquare(16);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing perfectSquare for test 2", () => {
	const result = perfectSquare(14);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

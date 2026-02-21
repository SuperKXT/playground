import { expect, expectTypeOf, test } from "vitest";

import { complementNumber } from "./complement-number.js";

test("testing complementNumber for test 1", () => {
	const result = complementNumber(5);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing complementNumber for test 2", () => {
	const result = complementNumber(1);
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

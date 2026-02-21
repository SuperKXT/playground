import { expect, expectTypeOf, test } from "vitest";

import { addDigits } from "./add-digits.js";

test("testing addDigits for test 1", () => {
	const result = addDigits(38);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing addDigits for test 2", () => {
	const result = addDigits(0);
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

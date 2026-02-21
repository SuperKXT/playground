import { expect, expectTypeOf, test } from "vitest";

import { countBits } from "./counting-bits.js";

test("testing countBits for test 1", () => {
	const result = countBits(2);
	const expected = [0, 1, 1];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing countBits for test 2", () => {
	const result = countBits(5);
	const expected = [0, 1, 1, 2, 1, 2];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

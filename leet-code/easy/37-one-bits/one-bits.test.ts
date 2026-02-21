import { expect, expectTypeOf, test } from "vitest";

import { oneBits } from "./one-bits.js";

test("testing oneBits for test 1", () => {
	const result = oneBits(11);
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing oneBits for test 2", () => {
	const result = oneBits(128);
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing oneBits for test 3", () => {
	const result = oneBits(2147483645);
	const expected = 30 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

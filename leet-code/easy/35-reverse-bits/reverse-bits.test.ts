import { expect, expectTypeOf, test } from "vitest";

import { reverseBits } from "./reverse-bits.js";

test("testing reverseBits for test 1", () => {
	const result = reverseBits(43261596);
	const expected = 964176192 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseBits for test 2", () => {
	const result = reverseBits(2147483644);
	const expected = 1073741822 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

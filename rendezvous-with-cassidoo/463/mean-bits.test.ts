import { expect, expectTypeOf, test } from "vitest";

import { meanBits } from "./mean-bits.js";

test("testing meanBits against test 1", () => {
	const result = meanBits(6);
	const expected = "2.00" as string;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing meanBits against test 2", () => {
	const result = meanBits(17);
	const expected = "3.00" as string;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

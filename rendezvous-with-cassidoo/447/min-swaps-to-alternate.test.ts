import { expect, expectTypeOf, test } from "vitest";

import { minSwapsToAlternate } from "./min-swaps-to-alternate.js";

test("testing minSwapsToAlternate against test 1", () => {
	const result = minSwapsToAlternate("aabb"); // cSpell: disable-line
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing minSwapsToAlternate against test 2", () => {
	const result = minSwapsToAlternate("aaab"); // cSpell: disable-line
	const expected = -1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing minSwapsToAlternate against test 3", () => {
	const result = minSwapsToAlternate("aaaabbbb"); // cSpell: disable-line
	const expected = 6 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

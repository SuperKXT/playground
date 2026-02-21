import { expect, expectTypeOf, test } from "vitest";

import { arrangeCoins } from "./arrange-coins.js";

test("testing arrangeCoins for test 1", () => {
	const result = arrangeCoins(5);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing arrangeCoins for test 2", () => {
	const result = arrangeCoins(8);
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing arrangeCoins for test 3", () => {
	const result = arrangeCoins(1681692777);
	const expected = 57994 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { expect, expectTypeOf, test } from "vitest";

import { maxStock } from "./max-stock.js";

test("testing maxStock 1", () => {
	const result = maxStock([7, 1, 5, 3, 6, 4]);
	const expected = 5 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxStock 2", () => {
	const result = maxStock([7, 6, 4, 3, 1]);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

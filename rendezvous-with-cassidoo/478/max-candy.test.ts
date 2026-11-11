import { expect, expectTypeOf, test } from "vitest";

import { maxCandy } from "./max-candy.js";

test("testing maxCandy against test 1", () => {
	const result = maxCandy([2, 7, 9, 3, 1]);
	const expected = 12 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing maxCandy against test 2", () => {
	const result = maxCandy([5, 1, 1, 5]);
	const expected = 10 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing maxCandy against test 3", () => {
	const result = maxCandy([4]);
	const expected = 4 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

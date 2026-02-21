import { expect, expectTypeOf, test } from "vitest";

import { insertPosition } from "./insert-position.js";

test("testing insertPosition for test 1", () => {
	const result = insertPosition([1, 3, 5, 6], 5);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing insertPosition for test 2", () => {
	const result = insertPosition([1, 3, 5, 6], 2);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing insertPosition for test 3", () => {
	const result = insertPosition([1, 3, 5, 6], 7);
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

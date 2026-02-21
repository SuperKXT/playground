import { expect, expectTypeOf, test } from "vitest";

import { majority } from "./majority.js";

test("testing majority against test 1", () => {
	const result = majority([3, 1, 4, 1]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing majority against test 2", () => {
	const result = majority([33, 44, 55, 66, 77]);
	const expected = "odds" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing majority against test 3", () => {
	const result = majority([1, 2, 3, 4]);
	const expected = "none" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing majority against test 4", () => {
	const result = majority([1, 2, 3, 4, 6]);
	const expected = "evens" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

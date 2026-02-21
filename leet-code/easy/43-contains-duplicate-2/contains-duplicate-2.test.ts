import { expect, expectTypeOf, test } from "vitest";

import { containsDuplicate } from "./contains-duplicate-2.js";

test("testing containsDuplicate for test 1", () => {
	const result = containsDuplicate([1, 2, 3, 1], 3);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing containsDuplicate for test 2", () => {
	const result = containsDuplicate([1, 0, 1, 1], 1);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing containsDuplicate for test 3", () => {
	const result = containsDuplicate([1, 2, 3, 1, 2, 3], 2);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing containsDuplicate for test 4", () => {
	const result = containsDuplicate([99, 99], 2);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

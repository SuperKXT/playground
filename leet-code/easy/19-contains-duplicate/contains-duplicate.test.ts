import { expect, expectTypeOf, test } from "vitest";

import { containsDuplicate } from "./contains-duplicate.js";

test("testing mergeSortedArrays for test 1", () => {
	const result = containsDuplicate([1, 2, 3, 1]);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing mergeSortedArrays for test 2", () => {
	const result = containsDuplicate([1, 2, 3, 4]);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

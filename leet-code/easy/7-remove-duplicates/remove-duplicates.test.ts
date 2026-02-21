import { expect, expectTypeOf, test } from "vitest";

import { removeDuplicates } from "./remove-duplicates.js";

test("testing removeDuplicates for test 1", () => {
	const result = removeDuplicates([1, 1, 2]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing removeDuplicates for test 2", () => {
	const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
	const expected = 5 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

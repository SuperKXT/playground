import { expect, expectTypeOf, test } from "vitest";

import { mergeArrays } from "./merge-arrays.js";

test("testing mergeArrays against test 1", () => {
	const a = [1, 3, 5, 0, 0, 0];
	const b = [2, 4, 6];
	mergeArrays(a, b);
	const expected = [1, 2, 3, 4, 5, 6];

	expect(a).toStrictEqual(expected);

	expectTypeOf(a).toEqualTypeOf(expected);
});

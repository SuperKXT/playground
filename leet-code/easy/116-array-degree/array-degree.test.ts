import { expect, expectTypeOf, test } from "vitest";

import { arrayDegree } from "./array-degree.js";

test("testing arrayDegree for test 1", () => {
	const result = arrayDegree([1, 2, 2, 3, 1]);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing arrayDegree for test 2", () => {
	const result = arrayDegree([1, 2, 2, 3, 1, 4, 2]);
	const expected = 6 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

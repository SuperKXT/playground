import { expect, expectTypeOf, test } from "vitest";

import { pascalTriangle } from "./pascal-triangle.js";

test("testing pascalTriangle for test 1", () => {
	const result = pascalTriangle(5);
	const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing pascalTriangle for test 2", () => {
	const result = pascalTriangle(1);
	const expected = [[1]];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { expect, expectTypeOf, test } from "vitest";

import { islandPerimeter } from "./island-perimeter.js";

test("testing islandPerimeter for test 1", () => {
	const result = islandPerimeter([
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
	]);
	const expected = 16 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing islandPerimeter for test 2", () => {
	const result = islandPerimeter([[1]]);
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing islandPerimeter for test 3", () => {
	const result = islandPerimeter([[1, 0]]);
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing islandPerimeter for test 4", () => {
	const result = islandPerimeter([]);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

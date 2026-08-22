import { expect, expectTypeOf, test } from "vitest";

import { packRectangles } from "./pack-rectangles.js";

test("testing packRectangles against test 1", () => {
	const result = packRectangles(10, 10, 3, 4);
	const expected = 6 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing packRectangles against test 2", () => {
	const result = packRectangles(10, 6, 2, 3);
	const expected = 10 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing packRectangles against test 3", () => {
	const result = packRectangles(10, 6, 11, 2);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing packRectangles against test 4", () => {
	const result = packRectangles(6, 10, 2, 3);
	const expected = 10 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

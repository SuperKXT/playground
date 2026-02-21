import { expect, expectTypeOf, test } from "vitest";

import { dominantIndex } from "./dominant-index.js";

test("testing dominantIndex for test 1", () => {
	const result = dominantIndex([3, 6, 1, 0]);
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing dominantIndex for test 2", () => {
	const result = dominantIndex([1, 2, 3, 4]);
	const expected = -1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { expect, expectTypeOf, test } from "vitest";

import { packSuitcases } from "./pack-suitcases.js";

test("testing packSuitcases against test 1", () => {
	const result = packSuitcases([4, 8, 1, 4, 2], [10, 6, 8]);
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing packSuitcases against test 2", () => {
	const result = packSuitcases([9, 7, 6], [10, 6]);
	const expected = -1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

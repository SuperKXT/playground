import { expect, expectTypeOf, test } from "vitest";

import { perrinCombinations, perrinNums } from "./perrin-combinations.js";

test("testing perrinNums against test 1", () => {
	const result = perrinNums(7);
	const expected = [3, 0, 2, 3, 2, 5, 5, 7];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing perrinCombinations against test 1", () => {
	const result = perrinCombinations(7, 12);
	const expected = [
		[0, 2, 3, 7],
		[0, 5, 7],
		[2, 3, 7],
		[5, 7],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing perrinCombinations against test 2", () => {
	const result = perrinCombinations(6, 5);
	const expected = [[0, 2, 3], [0, 5], [2, 3], [5]];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

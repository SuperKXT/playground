import { expect, expectTypeOf, test } from "vitest";

import { arrayPartition } from "./array-partition.js";

test("testing arrayPartition for test 1", () => {
	const result = arrayPartition([1, 4, 3, 2]);
	const expected = 4 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing arrayPartition for test 2", () => {
	const result = arrayPartition([6, 2, 6, 5, 1, 2]);
	const expected = 9 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

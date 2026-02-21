import { expect, expectTypeOf, test } from "vitest";

import { binarySearch } from "./binary-search.js";

test("testing binarySearch for test 1", () => {
	const result = binarySearch([-1, 0, 3, 5, 9, 12], 9);
	const expected = 4 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing binarySearch for test 2", () => {
	const result = binarySearch([-1, 0, 3, 5, 9, 12], 2);
	const expected = -1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

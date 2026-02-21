import { expect, expectTypeOf, test } from "vitest";

import { hammingDistance } from "./hamming-distance.js";

test("testing hammingDistance for test 1", () => {
	const result = hammingDistance(1, 4);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing hammingDistance for test 2", () => {
	const result = hammingDistance(3, 1);
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

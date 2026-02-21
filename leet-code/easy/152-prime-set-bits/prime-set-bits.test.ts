import { expect, expectTypeOf, test } from "vitest";

import { countPrimeSetBits } from "./prime-set-bits.js";

test("testing countPrimeSetBits for test 1", () => {
	const result = countPrimeSetBits(6, 10);
	const expected: number = 4;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing countPrimeSetBits for test 2", () => {
	const result = countPrimeSetBits(10, 15);
	const expected: number = 5;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

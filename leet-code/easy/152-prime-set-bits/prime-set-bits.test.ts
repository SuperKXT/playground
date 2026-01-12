import { assertType, expect, test } from "vitest";

import { countPrimeSetBits } from "./prime-set-bits.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing countPrimeSetBits for test 1", () => {
	const result = countPrimeSetBits(6, 10);
	const expected: number = 4;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing countPrimeSetBits for test 2", () => {
	const result = countPrimeSetBits(10, 15);
	const expected: number = 5;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

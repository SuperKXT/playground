import { assertType, expect, test } from "vitest";

import { gcd } from "./greatest-common-denominator.js";

import type { Utils } from "../../types/utils.types.js";

test("testing gcd for test 1", () => {
	const result = gcd([1, 2, 3, 4, 4, 3, 2, 1]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcd for test 2", () => {
	const result = gcd([24, 36, 60]);
	const expected = 12 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcd for test 3", () => {
	const result = gcd([8, 16, 32]);
	const expected = 8 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcd for test 4", () => {
	const result = gcd([5]);
	const expected = 5 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcd for test 5", () => {
	const result = gcd([]);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcd for test 6", () => {
	const result = gcd([5, 3]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

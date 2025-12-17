import { assertType, expect, test } from "vitest";

import { gcdArray } from "./gcd-array.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing gcdArray for test 1", () => {
	const result = gcdArray([2, 5, 6, 9, 10]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcdArray for test 2", () => {
	const result = gcdArray([7, 5, 6, 8, 3]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing gcdArray for test 3", () => {
	const result = gcdArray([3, 3]);
	const expected = 3 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

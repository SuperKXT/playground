import { assertType, expect, test } from "vitest";

import { distributeCandies } from "./distribute-candies.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing distributeCandies for test 1", () => {
	const result = distributeCandies([1, 1, 2, 2, 3, 3]);
	const expected = 3 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing distributeCandies for test 2", () => {
	const result = distributeCandies([1, 1, 2, 3]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing distributeCandies for test 3", () => {
	const result = distributeCandies([6, 6, 6, 6]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing distributeCandies for test 4", () => {
	const result = distributeCandies([2, 1, 2, 3]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

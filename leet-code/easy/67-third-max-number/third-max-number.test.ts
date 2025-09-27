import { assertType, expect, test } from "vitest";

import { thirdMaxNumber } from "./third-max-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing thirdMaxNumber for test 1", () => {
	const result = thirdMaxNumber([3, 2, 1]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing thirdMaxNumber for test 2", () => {
	const result = thirdMaxNumber([1, 2]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing thirdMaxNumber for test 3", () => {
	const result = thirdMaxNumber([2, 2, 3, 1]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

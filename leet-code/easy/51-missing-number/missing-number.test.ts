import { assertType, expect, test } from "vitest";

import { missingNumber } from "./missing-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing missingNumber for test 1", () => {
	const result = missingNumber([3, 0, 1]);
	const expected = 2;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing missingNumber for test 2", () => {
	const result = missingNumber([0, 1]);
	const expected = 2;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing missingNumber for test 2", () => {
	const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
	const expected = 8;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

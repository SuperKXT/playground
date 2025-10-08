import { assertType, expect, test } from "vitest";

import { pivotIndex } from "./pivot-index.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing pivotIndex for test 1", () => {
	const result = pivotIndex([1, 7, 3, 6, 5, 6]);
	const expected = 3 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing pivotIndex for test 2", () => {
	const result = pivotIndex([1, 2, 3]);
	const expected = -1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing pivotIndex for test 3", () => {
	const result = pivotIndex([2, 1, -1]);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

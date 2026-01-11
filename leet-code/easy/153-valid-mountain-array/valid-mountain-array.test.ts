import { assertType, expect, test } from "vitest";

import { validMountainArray } from "./valid-mountain-array.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing validMountainArray for test 1", () => {
	const result = validMountainArray([2, 1]);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing validMountainArray for test 2", () => {
	const result = validMountainArray([3, 5, 5]);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing validMountainArray for test 3", () => {
	const result = validMountainArray([0, 3, 2, 1]);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

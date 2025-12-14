import { assertType, expect, test } from "vitest";

import { monotonicArray } from "./monotonic-array.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing monotonicArray for test 1", () => {
	const result = monotonicArray([1, 2, 2, 3]);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing monotonicArray for test 2", () => {
	const result = monotonicArray([6, 5, 4, 4]);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing monotonicArray for test 3", () => {
	const result = monotonicArray([1, 3, 2]);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

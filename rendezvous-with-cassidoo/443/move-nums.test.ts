import { assertType, expect, test } from "vitest";

import { moveNumsImmutable, moveNumsInPlace } from "./move-nums.js";

import type { Utils } from "../../types/utils.types.js";

test("testing moveNumsImmutable against test 1", () => {
	const result = moveNumsImmutable([0, 2, 0, 3, 10], 0);
	const expected = [2, 3, 10, 0, 0];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing moveNumsInPlace against test 1", () => {
	const result = moveNumsInPlace([0, 2, 0, 3, 10], 0);
	const expected = [2, 3, 10, 0, 0];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

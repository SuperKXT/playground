import { assertType, expect, test } from "vitest";

import { minDistance } from "./min-distance.js";

import type { Utils } from "../../types/utils.types.js";

test("testing minDistance against test 1", () => {
	const result = minDistance([3, 8, 10, 15], 9);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing minDistance against test 2", () => {
	const result = minDistance([5, 9, 14, 18], 4);
	const expected = -1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

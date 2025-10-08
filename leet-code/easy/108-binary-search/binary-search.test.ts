import { assertType, expect, test } from "vitest";

import { binarySearch } from "./binary-search.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing selfDividingNumbers for test 1", () => {
	const result = binarySearch([-1, 0, 3, 5, 9, 12], 9);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing selfDividingNumbers for test 2", () => {
	const result = binarySearch([-1, 0, 3, 5, 9, 12], 2);
	const expected = -1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

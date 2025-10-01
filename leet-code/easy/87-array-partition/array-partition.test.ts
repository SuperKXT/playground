import { assertType, expect, test } from "vitest";

import { arrayPartition } from "./array-partition.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing arrayPartition for test 1", () => {
	const result = arrayPartition([1, 4, 3, 2]);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing arrayPartition for test 2", () => {
	const result = arrayPartition([6, 2, 6, 5, 1, 2]);
	const expected = 9 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

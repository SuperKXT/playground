import { assertType, expect, test } from "vitest";

import { relativeRanks } from "./relative-ranks.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing relativeRanks for test 1", () => {
	const result = relativeRanks([5, 4, 3, 2, 1]);
	const expected = ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing relativeRanks for test 2", () => {
	const result = relativeRanks([10, 3, 8, 9, 4]);
	const expected = ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

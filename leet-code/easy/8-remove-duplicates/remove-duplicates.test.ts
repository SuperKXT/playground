import { assertType, expect, test } from "vitest";

import { removeDuplicates } from "./remove-duplicates.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing removeDuplicates for test 1", () => {
	const result = removeDuplicates([1, 1, 2]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing removeDuplicates for test 2", () => {
	const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
	const expected = 5 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { assertType, expect, test } from "vitest";

import { relativeSortArray } from "./relative-sort-array.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing relativeSortArray for test 1", () => {
	const result = relativeSortArray(
		[2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
		[2, 1, 4, 3, 9, 6],
	);
	const expected = [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing relativeSortArray for test 2", () => {
	const result = relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]);
	const expected = [22, 28, 8, 6, 17, 44];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { assertType, expect, test } from "vitest";

import { mergeArrays } from "./merge-arrays.js";

import type { Utils } from "../../types/utils.types.js";

test("testing mergeArrays against test 1", () => {
	const a = [1, 3, 5, 0, 0, 0];
	const b = [2, 4, 6];
	mergeArrays(a, b);
	const expected = [1, 2, 3, 4, 5, 6];
	expect(a).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof a, typeof expected>;
	assertType<TTrue>(true);
});

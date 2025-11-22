import { assertType, expect, test } from "vitest";

import { repeatedIntegers } from "./repeated-integers.js";

import type { Utils } from "../../types/utils.types.js";

test("testing repeatedIntegers against test 1", () => {
	const result = repeatedIntegers(4);
	const expected = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

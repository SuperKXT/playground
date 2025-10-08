import { assertType, expect, test } from "vitest";

import { selfDividingNumbers } from "./self-dividing-numbers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing selfDividingNumbers for test 1", () => {
	const result = selfDividingNumbers(1, 22);
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing selfDividingNumbers for test 2", () => {
	const result = selfDividingNumbers(47, 85);
	const expected = [48, 55, 66, 77];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { assertType, expect, test } from "vitest";

import { prefixesDivBy5 } from "./binary-prefix-divisible-by-5.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing prefixesDivBy5 for test 1", () => {
	const result = prefixesDivBy5([0, 1, 1]);
	const expected = [true, false, false];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing prefixesDivBy5 for test 2", () => {
	const result = prefixesDivBy5([1, 1, 1]);
	const expected = [false, false, false];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

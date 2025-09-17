import { assertType, expect, test } from "vitest";

import { happyNumber } from "./happy-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing happyNumber for test 1", () => {
	const result = happyNumber(19);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing happyNumber for test 2", () => {
	const result = happyNumber(2);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

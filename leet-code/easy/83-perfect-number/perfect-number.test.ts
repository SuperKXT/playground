import { assertType, expect, test } from "vitest";

import { perfectNumber } from "./perfect-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing relativeRanks for test 1", () => {
	const result = perfectNumber(28);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing relativeRanks for test 2", () => {
	const result = perfectNumber(7);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing relativeRanks for test 3", () => {
	const result = perfectNumber(1);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

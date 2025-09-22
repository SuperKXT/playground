import { assertType, expect, test } from "vitest";

import { kindOfNumber } from "./kind-of-number.js";

import type { Utils } from "../../types/utils.types.js";

test("testing kindOfNumber against test 1", () => {
	const result = kindOfNumber(6);
	const expected = "perfect" as "perfect" | "abundant" | "deficient";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing kindOfNumber against test 2", () => {
	const result = kindOfNumber(12);
	const expected = "abundant" as "perfect" | "abundant" | "deficient";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing kindOfNumber against test 3", () => {
	const result = kindOfNumber(4);
	const expected = "deficient" as "perfect" | "abundant" | "deficient";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

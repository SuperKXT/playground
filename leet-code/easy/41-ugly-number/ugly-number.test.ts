import { assertType, expect, test } from "vitest";

import { uglyNumber } from "./ugly-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing uglyNumber for test 1", () => {
	const result = uglyNumber(6);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing uglyNumber for test 2", () => {
	const result = uglyNumber(1);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing uglyNumber for test 3", () => {
	const result = uglyNumber(14);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing uglyNumber for test 4", () => {
	const result = uglyNumber(0);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

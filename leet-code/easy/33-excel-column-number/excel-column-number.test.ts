import { assertType, expect, test } from "vitest";

import { excelColumnNumber } from "./excel-column-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing excelColumnNumber for test 1", () => {
	const result = excelColumnNumber("A");
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing excelColumnNumber for test 2", () => {
	const result = excelColumnNumber("AB");
	const expected = 28 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing excelColumnNumber for test 3", () => {
	const result = excelColumnNumber("ZY");
	const expected = 701 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing excelColumnNumber for test 4", () => {
	const result = excelColumnNumber("FXSHRXW");
	const expected = 2147483647 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

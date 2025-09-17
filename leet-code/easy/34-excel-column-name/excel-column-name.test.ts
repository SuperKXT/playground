import { assertType, expect, test } from "vitest";

import { excelColumnName } from "./excel-column-name.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing excelColumnName for test 1", () => {
	const result = excelColumnName(1);
	const expected = "A" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing excelColumnName for test 2", () => {
	const result = excelColumnName(28);
	const expected = "AB" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing excelColumnName for test 3", () => {
	const result = excelColumnName(701);
	const expected = "ZY" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing excelColumnName for test 4", () => {
	const result = excelColumnName(2147483647);
	const expected = "FXSHRXW" as string; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing excelColumnName for test 5", () => {
	const result = excelColumnName(52);
	const expected = "AZ" as string; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

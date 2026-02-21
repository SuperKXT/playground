import { expect, expectTypeOf, test } from "vitest";

import { excelColumnNumber } from "./excel-column-number.js";

test("testing excelColumnNumber for test 1", () => {
	const result = excelColumnNumber("A");
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing excelColumnNumber for test 2", () => {
	const result = excelColumnNumber("AB");
	const expected = 28 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing excelColumnNumber for test 3", () => {
	const result = excelColumnNumber("ZY");
	const expected = 701 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing excelColumnNumber for test 4", () => {
	const result = excelColumnNumber("FXSHRXW"); // cSpell: disable-line
	const expected = 2147483647 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

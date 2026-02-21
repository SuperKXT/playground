import { expect, expectTypeOf, test } from "vitest";

import { attendance } from "./attendance-i.js";

test("testing attendance for test 1", () => {
	const result = attendance("PPALLP"); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing attendance for test 2", () => {
	const result = attendance("PPALLL"); // cSpell: disable-line
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

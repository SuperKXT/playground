import { expect, expectTypeOf, test } from "vitest";

import { longPressedName } from "./long-pressed-name.js";

test("testing longPressedName for test 1", () => {
	const result = longPressedName("alex", "aaleexxx"); // cSpell: disable-line
	const expected = true;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longPressedName for test 2", () => {
	const result = longPressedName("alex", "aaleexxxs"); // cSpell: disable-line
	const expected = false;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing longPressedName for test 3", () => {
	const result = longPressedName("saeed", "ssaaedd"); // cSpell: disable-line
	const expected = false;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

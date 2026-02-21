import { expect, expectTypeOf, test } from "vitest";

import { kPal } from "./k-pal.js";

test("testing kPal against test 1", () => {
	const result = kPal("abcweca", 2); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing kPal against test 2", () => {
	const result = kPal("acxcb", 1); // cSpell: disable-line
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing kPal against test 3", () => {
	const result = kPal("abcba", 1); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

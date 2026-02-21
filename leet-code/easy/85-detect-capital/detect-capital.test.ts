import { expect, expectTypeOf, test } from "vitest";

import { detectCapital } from "./detect-capital.js";

test("testing detectCapital for test 1", () => {
	const result = detectCapital("USA");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing detectCapital for test 2", () => {
	const result = detectCapital("leetcode"); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing detectCapital for test 3", () => {
	const result = detectCapital("Google");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing detectCapital for test 4", () => {
	const result = detectCapital("fsS");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing detectCapital for test 5", () => {
	const result = detectCapital("FlaG");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

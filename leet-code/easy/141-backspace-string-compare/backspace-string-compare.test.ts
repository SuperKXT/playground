import { expect, expectTypeOf, test } from "vitest";

import { backspaceCompare } from "./backspace-string-compare.js";

test("testing backspaceCompare for test 1", () => {
	const result = backspaceCompare("ab#c", "ad#c");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing backspaceCompare for test 2", () => {
	const result = backspaceCompare("ab##", "c#d#");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing backspaceCompare for test 3", () => {
	const result = backspaceCompare("a#c", "b");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

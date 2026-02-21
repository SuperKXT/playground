import { expect, expectTypeOf, test } from "vitest";

import { removeOuterParentheses } from "./remove-outer-parens.js";

test("testing removeOuterParentheses for test 1", () => {
	const result = removeOuterParentheses("(()())(())");
	const expected = "()()()" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing removeOuterParentheses for test 2", () => {
	const result = removeOuterParentheses("(()())(())(()(()))");
	const expected = "()()()()(())" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing removeOuterParentheses for test 3", () => {
	const result = removeOuterParentheses("()()");
	const expected = "" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

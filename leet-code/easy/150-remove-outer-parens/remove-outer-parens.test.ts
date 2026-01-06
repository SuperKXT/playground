import { assertType, expect, test } from "vitest";

import { removeOuterParentheses } from "./remove-outer-parens.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing removeOuterParentheses for test 1", () => {
	const result = removeOuterParentheses("(()())(())");
	const expected = "()()()";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing removeOuterParentheses for test 2", () => {
	const result = removeOuterParentheses("(()())(())(()(()))");
	const expected = "()()()()(())";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing removeOuterParentheses for test 3", () => {
	const result = removeOuterParentheses("()()");
	const expected = "";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

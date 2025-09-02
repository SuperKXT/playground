import { assertType, expect, test } from "vitest";

import { validParenthesis } from "./valid-parenthesis.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing palindromeNumber for test 1", () => {
	const result = validParenthesis("()");
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 2", () => {
	const result = validParenthesis("()[]{}");
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 3", () => {
	const result = validParenthesis("(]");
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 4", () => {
	const result = validParenthesis("(25 + [3 / 2 * 1])");
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 5", () => {
	const result = validParenthesis("([)]");
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing palindromeNumber for test 6", () => {
	const result = validParenthesis("(");
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

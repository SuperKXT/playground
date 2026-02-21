import { expect, expectTypeOf, test } from "vitest";

import { wordBreak } from "./word-break.js";

test("testing wordBreak against test 1", () => {
	const result = wordBreak("leetcode", ["leet", "code"]); // cSpell: disable-line
	const expected = true as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing wordBreak against test 2", () => {
	const result = wordBreak("catsandog", ["cat", "cats", "and", "sand", "dog"]); // cSpell: disable-line
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing wordBreak against test 3", () => {
	const result = wordBreak("catsanddog", ["cat", "sand", "dog"]); // cSpell: disable-line
	const expected = true as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing wordBreak against test 4", () => {
	const result = wordBreak("catsandog", ["cat", "cat"]); // cSpell: disable-line
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing wordBreak against test 5", () => {
	const result = wordBreak("aaaaaaaa", ["aa", "aaa"]);
	const expected = true as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

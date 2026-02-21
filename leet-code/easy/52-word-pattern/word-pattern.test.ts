import { expect, expectTypeOf, test } from "vitest";

import { wordPattern } from "./word-pattern.js";

test("testing wordPattern for test 1", () => {
	const result = wordPattern("abba", "dog cat cat dog");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing wordPattern for test 2", () => {
	const result = wordPattern("abba", "dog cat cat fish");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing wordPattern for test 3", () => {
	const result = wordPattern("aaaa", "dog cat cat dog");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing wordPattern for test 4", () => {
	const result = wordPattern("abba", "dog dog dog dog");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

import { expect, expectTypeOf, test } from "vitest";

import { ransomNote } from "./ransom-note.js";

test("testing ransomNote for test 1", () => {
	const result = ransomNote("a", "b");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing ransomNote for test 2", () => {
	const result = ransomNote("aa", "ab");
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing ransomNote for test 3", () => {
	const result = ransomNote("aa", "aab");
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

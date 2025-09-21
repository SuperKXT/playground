import { assertType, expect, test } from "vitest";

import { ransomNote } from "./ransom-note.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing ransomNote for test 1", () => {
	const result = ransomNote("a", "b");
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing ransomNote for test 2", () => {
	const result = ransomNote("aa", "ab");
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing ransomNote for test 3", () => {
	const result = ransomNote("aa", "aab");
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

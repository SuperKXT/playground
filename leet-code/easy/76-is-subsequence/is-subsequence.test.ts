import { assertType, expect, test } from "vitest";

import { isSubsequence } from "./is-subsequence.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing isSubsequence for test 1", () => {
	const result = isSubsequence("abc", "ahbgdc"); // cSpell: disable-line
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing isSubsequence for test 2", () => {
	const result = isSubsequence("axc", "ahbgdc"); // cSpell: disable-line
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing isSubsequence for test 3", () => {
	const result = isSubsequence("", "ahbgdc"); // cSpell: disable-line
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

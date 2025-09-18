import { assertType, expect, test } from "vitest";

import { reverseVowels } from "./reverse-vowels.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing reverseVowels for test 1", () => {
	const result = reverseVowels("IceCreAm");
	const expected = "AceCreIm" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing reverseVowels for test 2", () => {
	const result = reverseVowels("leetcode"); // cSpell:disable-line
	const expected = "leotcede" as string; // cSpell:disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { assertType, expect, test } from "vitest";

import { reverseVowels } from "./reverse-vowels.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing reverseVowels for test 1", () => {
	const result = reverseVowels("IceCreAm");
	const expected = "AceCreIm";
	expect(result).toBe(expected);

	type TTrue = Utils.equal<typeof result, (typeof expected)[number]>;
	assertType<TTrue>(true);
});

test("testing reverseVowels for test 2", () => {
	const result = reverseVowels("leetcode"); // cSpell: disable-line
	const expected = "leotcede"; // cSpell: disable-line
	expect(result).toBe(expected);

	type TTrue = Utils.equal<typeof result, (typeof expected)[number]>;
	assertType<TTrue>(true);
});

test("testing reverseVowels for test 2", () => {
	const result = reverseVowels("a.");
	const expected = "a.";
	expect(result).toBe(expected);

	type TTrue = Utils.equal<typeof result, (typeof expected)[number]>;
	assertType<TTrue>(true);
});

test("testing reverseVowels for test 2", () => {
	const result = reverseVowels(" ");
	const expected = " ";
	expect(result).toBe(expected);

	type TTrue = Utils.equal<typeof result, (typeof expected)[number]>;
	assertType<TTrue>(true);
});

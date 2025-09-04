import { assertType, expect, test } from "vitest";

import { lengthOfLastWord } from "./length-of-last-word.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing lengthOfLastWord for test 1", () => {
	const result = lengthOfLastWord("Hello World");
	const expected = 5 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing lengthOfLastWord for test 2", () => {
	const result = lengthOfLastWord("   fly me   to   the moon  ");
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing lengthOfLastWord for test 3", () => {
	const result = lengthOfLastWord("luffy is still joyboy"); // cSpell: disable-line
	const expected = 6 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

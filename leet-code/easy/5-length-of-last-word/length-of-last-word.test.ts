import { expect, expectTypeOf, test } from "vitest";

import { lengthOfLastWord } from "./length-of-last-word.js";

test("testing lengthOfLastWord for test 1", () => {
	const result = lengthOfLastWord("Hello World");
	const expected = 5 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lengthOfLastWord for test 2", () => {
	const result = lengthOfLastWord("   fly me   to   the moon  ");
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lengthOfLastWord for test 3", () => {
	const result = lengthOfLastWord("luffy is still joyboy"); // cSpell: disable-line
	const expected = 6 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

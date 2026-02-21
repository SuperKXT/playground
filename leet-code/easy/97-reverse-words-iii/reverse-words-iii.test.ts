import { expect, expectTypeOf, test } from "vitest";

import { reverseWords } from "./reverse-words-iii.js";

test("testing reverseWords for test 1", () => {
	const result = reverseWords("Let's take LeetCode contest");
	const expected = "s'teL ekat edoCteeL tsetnoc" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseWords for test 2", () => {
	const result = reverseWords("Mr Ding");
	const expected = "rM gniD" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

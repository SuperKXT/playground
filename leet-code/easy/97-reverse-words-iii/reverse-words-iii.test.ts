import { assertType, expect, test } from "vitest";

import { reverseWords } from "./reverse-words-iii.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing reverseWords for test 1", () => {
	const result = reverseWords("Let's take LeetCode contest");
	const expected = "s'teL ekat edoCteeL tsetnoc"; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing reverseWords for test 2", () => {
	const result = reverseWords("Mr Ding");
	const expected = "rM gniD"; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { assertType, expect, test } from "vitest";

import { reverseString } from "./reverse-string-ii.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing detectCapital for test 1", () => {
	const result = reverseString("abcdefg", 2); // cSpell: disable-line
	const expected = "bacdfeg"; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing detectCapital for test 2", () => {
	const result = reverseString("abcd", 2); // cSpell: disable-line
	const expected = "bacd"; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

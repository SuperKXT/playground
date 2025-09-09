import { assertType, expect, test } from "vitest";

import { isAnagram } from "./is-anagram.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing isAnagram for test 1", () => {
	const result = isAnagram("anagram", "nagaram"); // cSpell: disable-line
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing isAnagram for test 2", () => {
	const result = isAnagram("rat", "car");
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

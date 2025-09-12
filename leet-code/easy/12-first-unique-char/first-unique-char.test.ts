import { assertType, expect, test } from "vitest";

import { firstUniqueChar } from "./first-unique-char.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing firstUniqueChar for test 1", () => {
	const result = firstUniqueChar("leetcode"); // cSpell: disable-line
	const expected = 0;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing firstUniqueChar for test 2", () => {
	const result = firstUniqueChar("loveleetcode"); // cSpell: disable-line
	const expected = 2;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing firstUniqueChar for test 3", () => {
	const result = firstUniqueChar("aabb"); // cSpell: disable-line
	const expected = -1;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing firstUniqueChar for test 4", () => {
	const result = firstUniqueChar("aadadaadz"); // cSpell: disable-line
	const expected = 8;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing firstUniqueChar for test 5", () => {
	const result = firstUniqueChar("aadadaad"); // cSpell: disable-line
	const expected = -1;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

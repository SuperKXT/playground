import { expect, test } from "vitest";

import { longestUniqueSubstring } from "./longest-unique-substring.js";

test("testing longestUniqueSubstring for test 1", () => {
	const res = longestUniqueSubstring("abcabcbb"); // cSpell: disable-line
	const expected = 3 as number;
	expect(res).toStrictEqual(expected);
});

test("testing longestUniqueSubstring for test 2", () => {
	const res = longestUniqueSubstring("bbbbb"); // cSpell: disable-line
	const expected = 1 as number;
	expect(res).toStrictEqual(expected);
});

test("testing longestUniqueSubstring for test 3", () => {
	const res = longestUniqueSubstring("pwwkew"); // cSpell: disable-line
	const expected = 3 as number;
	expect(res).toStrictEqual(expected);
});

test("testing longestUniqueSubstring for test 4", () => {
	const res = longestUniqueSubstring("dvdf"); // cSpell: disable-line
	const expected = 3 as number;
	expect(res).toStrictEqual(expected);
});

test("testing longestUniqueSubstring for test 5", () => {
	const res = longestUniqueSubstring("jyldtgrjrhosfglrcnspvy"); // cSpell: disable-line
	const expected = 10 as number;
	expect(res).toStrictEqual(expected);
});

test("testing longestUniqueSubstring for test 6", () => {
	const res = longestUniqueSubstring(" "); // cSpell: disable-line
	const expected = 1 as number;
	expect(res).toStrictEqual(expected);
});

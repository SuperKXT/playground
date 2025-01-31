import { findAnagrams } from "./find-anagram.js";

test("testing findAnagram against test 1", () => {
	const result = findAnagrams("cbaebabacd", "abc"); // cSpell: disable-line;
	const expected = [0, 6];
	expect(result).toStrictEqual(expected);
	assertType<typeof result>(expected);
});

test("testing findAnagram against test 2", () => {
	const result = findAnagrams("fish", "cake");
	const expected: number[] = [];
	expect(result).toStrictEqual(expected);
	assertType<typeof result>(expected);
});

test("testing findAnagram against test 3", () => {
	const result = findAnagrams("abab", "ab");
	const expected = [0, 1, 2];
	expect(result).toStrictEqual(expected);
	assertType<typeof result>(expected);
});

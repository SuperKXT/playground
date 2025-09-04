import { assertType, expect, test } from "vitest";

import { groupAnagrams } from "./group-anagrams.js";

import type { Utils } from "../../../types/utils.types.js";

const sortResults = (res: string[][]) => {
	return res
		.map((r) => r.sort())
		.sort((a, b) => a.join("").localeCompare(b.join("")));
};

test("testing groupAnagrams for test 1", () => {
	const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
	const expected = sortResults([
		["bat"],
		["nat", "tan"],
		["ate", "eat", "tea"],
	]);
	expect(sortResults(result)).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing groupAnagrams for test 2", () => {
	const result = groupAnagrams([""]);
	const expected = sortResults([[""]]);
	expect(sortResults(result)).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing groupAnagrams for test 3", () => {
	const result = groupAnagrams(["a"]);
	const expected = sortResults([["a"]]);
	expect(sortResults(result)).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

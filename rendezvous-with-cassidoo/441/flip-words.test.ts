import { assertType, expect, test } from "vitest";

import { flipWords } from "./flip-words.js";

import type { Utils } from "../../types/utils.types.js";

test("testing flipWords against test 1", () => {
	const result = flipWords("cat and mice");
	const expected = "cat dna mice";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing konamiMappingRegex against test 2", () => {
	const result = flipWords("banana healthy"); // cSpell: disable-line
	const expected = "banana healthy";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing konamiMappingRegex against test 2", () => {
	const result = flipWords("cat and mice and ants or bees"); // cSpell: disable-line
	const expected = "cat dna mice dna stna ro bees"; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

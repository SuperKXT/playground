import { assertType, expect, test } from "vitest";

import { shortestCompletingWord } from "./shortest-completing-word.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing shortestCompletingWord for test 1", () => {
	const result = shortestCompletingWord("1s3 PSt", [
		"step",
		"steps",
		"stripe",
		"steeple",
	]);
	const expected = "steps" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing shortestCompletingWord for test 2", () => {
	const result = shortestCompletingWord("1s3 456", [
		"looks",
		"pest",
		"stew",
		"show",
	]);
	const expected = "pest" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing shortestCompletingWord for test 3", () => {
	// cSpell: disable-next-line
	const result = shortestCompletingWord("iMSlpe4", [
		"claim",
		"consumer",
		"student",
		"camera",
		"public",
		"never",
		"wonder",
		"simple",
		"thought",
		"use",
	]);
	const expected = "simple" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

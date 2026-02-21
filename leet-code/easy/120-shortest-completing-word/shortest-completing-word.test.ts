import { expect, expectTypeOf, test } from "vitest";

import { shortestCompletingWord } from "./shortest-completing-word.js";

test("testing shortestCompletingWord for test 1", () => {
	const result = shortestCompletingWord("1s3 PSt", [
		"step",
		"steps",
		"stripe",
		"steeple",
	]);
	const expected = "steps" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing shortestCompletingWord for test 2", () => {
	const result = shortestCompletingWord("1s3 456", [
		"looks",
		"pest",
		"stew",
		"show",
	]);
	const expected = "pest" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
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
	const expected = "simple" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

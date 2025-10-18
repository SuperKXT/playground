import { assertType, expect, test } from "vitest";

import { mostCommonWord } from "./most-common-word.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing mostCommonWord for test 1", () => {
	const result = mostCommonWord(
		"Bob hit a ball, the hit BALL flew far after it was hit.",
		["hit"],
	);
	const expected = "ball" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing mostCommonWord for test 2", () => {
	const result = mostCommonWord("a.", []);
	const expected = "a" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing mostCommonWord for test 3", () => {
	const result = mostCommonWord("a b.b", []);
	const expected = "b" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing mostCommonWord for test 4", () => {
	const result = mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]);
	const expected = "ball" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

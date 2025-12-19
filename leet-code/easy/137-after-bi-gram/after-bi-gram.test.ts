import { assertType, expect, test } from "vitest";

import { afterBiGram } from "./after-bi-gram.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing afterBiGram for test 1", () => {
	const result = afterBiGram(
		"alice is a good girl she is a good student",
		"a",
		"good",
	);
	const expected = ["girl", "student"];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing afterBiGram for test 2", () => {
	const result = afterBiGram("we will we will rock you", "we", "will");
	const expected = ["we", "rock"];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing afterBiGram for test 2", () => {
	const result = afterBiGram(
		"alice is aa good girl she is a good student",
		"a",
		"good",
	);
	const expected = ["student"];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { assertType, expect, test } from "vitest";

import { maxWords } from "./max-words.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing maxWords for test 1", () => {
	const result = maxWords([
		"alice and bob love code",
		"i think so too",
		"this is great thanks very much",
	]);
	const expected = 6;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing maxWords for test 2", () => {
	const result = maxWords([
		"please wait",
		"continue to fight",
		"continue to win",
	]);
	const expected = 3;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

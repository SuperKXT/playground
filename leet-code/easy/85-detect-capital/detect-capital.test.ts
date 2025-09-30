import { assertType, expect, test } from "vitest";

import { detectCapital } from "./detect-capital.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing detectCapital for test 1", () => {
	const result = detectCapital("USA");
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing detectCapital for test 2", () => {
	const result = detectCapital("leetcode"); // cSpell: disable-line
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing detectCapital for test 3", () => {
	const result = detectCapital("Google");
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing detectCapital for test 4", () => {
	const result = detectCapital("fsS");
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing detectCapital for test 5", () => {
	const result = detectCapital("FlaG");
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

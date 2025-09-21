import { assertType, expect, test } from "vitest";

import { addStrings } from "./add-strings.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing addStrings for test 1", () => {
	const result = addStrings("11", "123");
	const expected = "134";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing addStrings for test 2", () => {
	const result = addStrings("456", "77");
	const expected = "533";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing addStrings for test 3", () => {
	const result = addStrings("0", "0");
	const expected = "0";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing addStrings for test 3", () => {
	const result = addStrings("15654546454", "54645645415");
	const expected = "70300191869";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

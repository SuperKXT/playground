import { assertType, expect, test } from "vitest";

import { lowerCase } from "./lower-case.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing lowerCase for test 1", () => {
	const result = lowerCase("Hello");
	const expected = "hello";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing lowerCase for test 2", () => {
	const result = lowerCase("here");
	const expected = "here";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing lowerCase for test 3", () => {
	const result = lowerCase("LOVELY");
	const expected = "lovely";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

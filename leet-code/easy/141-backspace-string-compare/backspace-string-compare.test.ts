import { assertType, expect, test } from "vitest";

import { backspaceCompare } from "./backspace-string-compare.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing backspaceCompare for test 1", () => {
	const result = backspaceCompare("ab#c", "ad#c");
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing backspaceCompare for test 2", () => {
	const result = backspaceCompare("ab##", "c#d#");
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing backspaceCompare for test 3", () => {
	const result = backspaceCompare("a#c", "b");
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

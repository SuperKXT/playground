import { assertType, expect, test } from "vitest";

import { stringSegments } from "./string-segments.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing thirdMaxNumber for test 1", () => {
	const result = stringSegments("Hello, my name is John");
	const expected = 5 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing thirdMaxNumber for test 2", () => {
	const result = stringSegments("Hello");
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing thirdMaxNumber for test 3", () => {
	const result = stringSegments("");
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

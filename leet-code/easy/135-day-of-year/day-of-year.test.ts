import { assertType, expect, test } from "vitest";

import { dayOfYear } from "./day-of-year.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing dayOfYear for test 1", () => {
	const result = dayOfYear("2019-01-09");
	const expected = 9 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing dayOfYear for test 2", () => {
	const result = dayOfYear("2019-02-10");
	const expected = 41 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

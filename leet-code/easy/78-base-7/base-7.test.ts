import { assertType, expect, test } from "vitest";

import { base7 } from "./base-7.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing maxConsecutiveOnes for test 1", () => {
	const result = base7(100);
	const expected = "202" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing maxConsecutiveOnes for test 2", () => {
	const result = base7(-7);
	const expected = "-10" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

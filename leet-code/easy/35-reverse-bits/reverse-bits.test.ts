import { assertType, expect, test } from "vitest";

import { reverseBits } from "./reverse-bits.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing reverseBits for test 1", () => {
	const result = reverseBits(43261596);
	const expected = 964176192 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing reverseBits for test 2", () => {
	const result = reverseBits(2147483644);
	const expected = 1073741822 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

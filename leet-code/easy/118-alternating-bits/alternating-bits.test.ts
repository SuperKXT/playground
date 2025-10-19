import { assertType, expect, test } from "vitest";

import { alternatingBits } from "./alternating-bits.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing alternatingBits for test 1", () => {
	const result = alternatingBits(5);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing alternatingBits for test 2", () => {
	const result = alternatingBits(7);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing alternatingBits for test 3", () => {
	const result = alternatingBits(11);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

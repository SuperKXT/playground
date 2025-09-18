import { assertType, expect, test } from "vitest";

import { countBits } from "./counting-bits.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing countBits for test 1", () => {
	const result = countBits(2);
	const expected = [0, 1, 1];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing countBits for test 2", () => {
	const result = countBits(5);
	const expected = [0, 1, 1, 2, 1, 2];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

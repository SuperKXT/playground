import { assertType, expect, test } from "vitest";

import { binaryGap } from "./binary-gap.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing binaryGap for test 1", () => {
	const result = binaryGap(22);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing binaryGap for test 2", () => {
	const result = binaryGap(8);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing binaryGap for test 3", () => {
	const result = binaryGap(5);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

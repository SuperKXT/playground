import { assertType, expect, test } from "vitest";

import { toHex } from "./to-hex.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing toHex for test 1", () => {
	const result = toHex(26);
	const expected = "1a" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing toHex for test 2", () => {
	const result = toHex(-1);
	const expected = "ffffffff" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing toHex for test 3", () => {
	const result = toHex(-2147483648);
	const expected = "80000000" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

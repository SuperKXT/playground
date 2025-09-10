import { assertType, expect, test } from "vitest";

import { maxProfit } from "./max-profit.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing maxProfit for test 1", () => {
	const result = maxProfit([7, 1, 5, 3, 6, 4]);
	const expected = 7 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing maxProfit for test 2", () => {
	const result = maxProfit([1, 2, 3, 4, 5]);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing maxProfit for test 2", () => {
	const result = maxProfit([7, 6, 5, 4, 3, 1]);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

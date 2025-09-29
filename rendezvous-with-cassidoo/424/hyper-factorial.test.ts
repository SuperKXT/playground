import { assertType, expect, test } from "vitest";

import { hyperFactorial } from "./hyper-factorial.js";

import type { Utils } from "../../types/utils.types.js";

test("testing hyperFactorial against test 1", () => {
	const result = hyperFactorial(0);
	const expected = 1n as bigint;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing kindOfNumber against test 2", () => {
	const result = hyperFactorial(2);
	const expected = 4n as bigint;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing kindOfNumber against test 3", () => {
	const result = hyperFactorial(3);
	const expected = 108n as bigint;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing kindOfNumber against test 3", () => {
	const result = hyperFactorial(7);
	const expected = 3319766398771200000n as bigint;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { assertType, expect, test } from "vitest";

import { fibonacciNumber } from "./fibonacci-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing fibonacciNumber for test 1", () => {
	const result = fibonacciNumber(0);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing fibonacciNumber for test 2", () => {
	const result = fibonacciNumber(1);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing fibonacciNumber for test 3", () => {
	const result = fibonacciNumber(2);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing fibonacciNumber for test 4", () => {
	const result = fibonacciNumber(3);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing fibonacciNumber for test 5", () => {
	const result = fibonacciNumber(4);
	const expected = 3 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing fibonacciNumber for test 5", () => {
	const result = fibonacciNumber(55);
	const expected = 3 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

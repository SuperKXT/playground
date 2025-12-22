import { assertType, expect, test } from "vitest";

import { alternativeArray } from "./alternative-array.js";

import type { Utils } from "../../types/utils.types.js";

test("testing alternativeArray against test 1", () => {
	const result = alternativeArray([]);
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing alternativeArray against test 2", () => {
	const result = alternativeArray([1]);
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing alternativeArray against test 3", () => {
	const result = alternativeArray([1, 1]);
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing alternativeArray against test 4", () => {
	const result = alternativeArray([1, 2, 1]);
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing alternativeArray against test 5", () => {
	const result = alternativeArray([10, 5, 10, 5, 10]);
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing alternativeArray against test 6", () => {
	const result = alternativeArray([2, 2, 3, 3]);
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing alternativeArray against test 7", () => {
	const result = alternativeArray([5, 4, 3, 5, 4, 3]);
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

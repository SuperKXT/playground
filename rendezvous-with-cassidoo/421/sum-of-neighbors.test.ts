import { assertType, expect, test } from "vitest";

import { sumOfNeighbors } from "./sum-of-neighbors.js";

import type { Utils } from "../../types/utils.types.js";

test("testing sumOfNeighbors against test 1", () => {
	const result = sumOfNeighbors([]);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sumOfNeighbors against test 2", () => {
	const result = sumOfNeighbors([1]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sumOfNeighbors against test 3", () => {
	const result = sumOfNeighbors([1, 4]);
	const expected = 10 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sumOfNeighbors against test 4", () => {
	const result = sumOfNeighbors([1, 4, 7]);
	const expected = 28 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sumOfNeighbors against test 5", () => {
	const result = sumOfNeighbors([1, 4, 7, 10]);
	const expected = 55 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sumOfNeighbors against test 6", () => {
	const result = sumOfNeighbors([-1, -2, -3]);
	const expected = -14 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sumOfNeighbors against test 7", () => {
	const result = sumOfNeighbors([0.1, 0.2, 0.3]).toFixed(1);
	const expected = "1.4" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sumOfNeighbors against test 8", () => {
	const result = sumOfNeighbors([1, -20, 300, -4000, 50000, -600000, 7000000]);
	const expected = 12338842 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

import { expect, expectTypeOf, test } from "vitest";

import {
	lastStoneWeightImmutable,
	lastStoneWeightMutable,
} from "./last-stone-weight.js";

test("testing lastStoneWeightImmutable for test 1", () => {
	const result = lastStoneWeightImmutable([2, 7, 4, 1, 8, 1]);
	const expected = 1;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lastStoneWeightImmutable for test 2", () => {
	const result = lastStoneWeightImmutable([1]);
	const expected = 1;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lastStoneWeightImmutable for test 3", () => {
	const arr: number[] = [];
	for (let i = 0; i < 2_000; i++) {
		for (let j = 0; j < 10; j++) {
			arr.push(j + 1);
		}
	}
	const result = lastStoneWeightImmutable(arr);
	const expected = 0;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lastStoneWeightMutable for test 1", () => {
	const result = lastStoneWeightMutable([2, 7, 4, 1, 8, 1]);
	const expected = 1;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lastStoneWeightMutable for test 2", () => {
	const result = lastStoneWeightMutable([1]);
	const expected = 1;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lastStoneWeightMutable for test 3", () => {
	const arr: number[] = [];
	for (let i = 0; i < 2_000; i++) {
		for (let j = 0; j < 10; j++) {
			arr.push(j + 1);
		}
	}
	const result = lastStoneWeightMutable(arr);
	const expected = 0;

	expect(result).toStrictEqual(expected);
});

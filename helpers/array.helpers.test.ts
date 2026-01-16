/* eslint-disable vitest/max-expects */
import { expect, expectTypeOf, test } from "vitest";

import {
	areArraysEqual,
	assertArrayLength,
	assertMinArrayLength,
	assertNonEmptyArray,
	compareValuesForSorting,
	filterInPlace,
	getSubTuple,
	getUniqueArray,
	groupArrayBy,
	inPlaceInsertToSortedArray,
	isArrayLength,
	isMinArrayLength,
	isNonEmptyArray,
	range,
	sortArrayBy,
} from "./array.helpers.js";
import { getRandomInteger } from "./random.helpers.js";

import type { Utils } from "../types/utils.types.js";

type TEqualityTest = {
	first: unknown[];
	second: unknown[];
	areEqual: boolean;
};

const EQUALITY_TESTS: TEqualityTest[] = [
	{
		areEqual: true,
		first: [1, 2, 3, 4],
		second: [1, 2, 3, 4],
	},
	{
		areEqual: false,
		first: [1, 2, 3, 4],
		second: ["1", "2", "3", "4"],
	},
	{
		areEqual: false,
		first: [1, 2, 3],
		second: [1],
	},
];

test.each(EQUALITY_TESTS)(
	"testing areArraysEqual helper",
	({ first, second, areEqual }) => {
		const response = areArraysEqual(first, second);
		expect(response).toStrictEqual(areEqual);
	},
);

test("test getUniqueArray", () => {
	const array1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
	const result1 = getUniqueArray(array1);
	expect(result1).toStrictEqual([1, 2, 3, 4, 5]);

	const array2 = ["a", "b", "c", "d", "e", "a", "b", "c", "d", "e"];
	const result2 = getUniqueArray(array2);
	expect(result2).toStrictEqual(["a", "b", "c", "d", "e"]);

	const array3 = [true, false, true, false];
	const result3 = getUniqueArray(array3);
	expect(result3).toStrictEqual([true, false]);

	const array4 = [{ a: 1 }, { b: 2 }, { c: 3 }, { a: 1 }, { b: 2 }, { c: 3 }];
	const result4 = getUniqueArray(array4);
	expect(result4).toStrictEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);

	const array5 = [[1], [2], [3], [1], [2], [3]];
	const result5 = getUniqueArray(array5);
	expect(result5).toStrictEqual([[1], [2], [3]]);
});

test("testing groupArrayBy", () => {
	const oneOneArray = [
		{ foo: 1, bar: 1, baz: 1 },
		{ foo: 1, bar: 1, baz: 2 },
	];
	const oneTwoArray = [
		{ foo: 1, bar: 2, baz: 1 },
		{ foo: 1, bar: 2, baz: 2 },
		{ foo: 1, bar: 2, baz: 3 },
	];
	const oneThreeArray = [{ foo: 1, bar: 3, baz: 1 }];
	const oneArray = [...oneOneArray, ...oneTwoArray, ...oneThreeArray];

	const twoOneArray = [
		{ foo: 2, bar: 1, baz: 1 },
		{ foo: 2, bar: 1, baz: 2 },
	];
	const towTwoArray = [{ foo: 2, bar: 2, baz: 1 }];
	const twoArray = [...twoOneArray, ...towTwoArray];

	const array1 = [...oneArray, ...twoArray];

	const result1 = groupArrayBy(array1, "foo");
	const expected1 = new Map([
		[1, oneArray],
		[2, twoArray],
	]);
	expect(result1).toStrictEqual(expected1);
	expectTypeOf<typeof expected1>(result1);

	const result2 = groupArrayBy(array1, "foo", "bar");
	const expected2 = new Map([
		["1-1", oneOneArray],
		["1-2", oneTwoArray],
		["1-3", oneThreeArray],
		["2-1", twoOneArray],
		["2-2", towTwoArray],
	]);
	expect(result2).toStrictEqual(expected2);
	expectTypeOf<typeof expected2>(result2);

	const falseArray = [
		{ foo: false, bar: 4 },
		{ foo: false, bar: 5 },
	];
	const trueArray = [{ foo: true, bar: 2 }];
	const result3 = groupArrayBy([...falseArray, ...trueArray], "foo");
	const expected3 = new Map([
		[false, falseArray],
		[true, trueArray],
	]);
	expect(result3).toStrictEqual(expected3);
	expectTypeOf<typeof expected3>(result3);

	const nullArray = [
		{ foo: null, bar: 4 },
		{ foo: null, bar: 5 },
	];
	const undefinedArray = [{ foo: undefined, bar: 6 }];
	const arr4 = [...falseArray, ...trueArray, ...nullArray, ...undefinedArray];
	const result4 = groupArrayBy(arr4, "foo");
	const expected4 = new Map<boolean | null | undefined, typeof arr4>([
		[false, falseArray],
		[true, trueArray],
		[null, nullArray],
		[undefined, undefinedArray],
	]);
	expect(result4).toStrictEqual(expected4);
	expectTypeOf<typeof expected4>(result4);
});

test("test compareValuesForSorting", () => {
	expect(compareValuesForSorting(1, 2)).toBeLessThan(0);
	expect(compareValuesForSorting(1, undefined)).toBeGreaterThan(0);
	expect(compareValuesForSorting(undefined, 1)).toBeLessThan(0);
	expect(compareValuesForSorting(2, 1)).toBeGreaterThan(0);
	expect(compareValuesForSorting(1, 1)).toBe(0);
	expect(compareValuesForSorting("a", "b")).toBeLessThan(0);
	expect(compareValuesForSorting(34, "34")).toBe(0);
	expect(compareValuesForSorting(true, false)).toBeGreaterThan(0);
	expect(compareValuesForSorting(true, true)).toBe(0);
	expect(compareValuesForSorting(null, undefined)).toBe(0);
	const d1 = new Date();
	const d2 = new Date(d1.getTime() + 1000);
	expect(compareValuesForSorting(d1, d2)).toBeLessThan(0);
});

test("test sortArrayBy", () => {
	const obj = [
		{ a: 5, b: 10, c: 2 },
		{ a: 5, b: 1, c: 2 },
		{ a: 5, b: 1, c: 1 },
		{ a: 5, b: 2, c: 1 },
		{ a: 5, b: 5, c: 4 },
		{ a: 1, b: 1, c: 4 },
		{ a: 1, b: 2, c: 5 },
		{ a: 1, b: 1, c: 40 },
		{ a: 5, b: 10, c: 1 },
	];
	expect(sortArrayBy(obj, ["a", "b", (r) => r.c])).toStrictEqual([
		{ a: 1, b: 1, c: 4 },
		{ a: 1, b: 1, c: 40 },
		{ a: 1, b: 2, c: 5 },
		{ a: 5, b: 1, c: 1 },
		{ a: 5, b: 1, c: 2 },
		{ a: 5, b: 2, c: 1 },
		{ a: 5, b: 5, c: 4 },
		{ a: 5, b: 10, c: 1 },
		{ a: 5, b: 10, c: 2 },
	]);
});

class TestError extends Error {
	foo: string;
	constructor(message: string) {
		super(message);
		this.name = "TestError";
		this.foo = "bar";
	}
}

test("test isMinArrayLength", () => {
	const array1 = [1, 2, 3];
	const check1 = isMinArrayLength(array1, 2);
	expect(check1).toBeTruthy();
	// eslint-disable-next-line vitest/no-conditional-in-test
	if (check1) {
		expectTypeOf<[number, number, ...number[]]>(array1);
	} else {
		expectTypeOf<number[]>(array1);
	}

	const check2 = isMinArrayLength([], 1);
	expect(check2).toBeFalsy();
});

test("test assertMinArrayLength", () => {
	expect(() => {
		const array = [1, 2, 3];
		assertMinArrayLength(array, 2);
		expectTypeOf<[number, number, ...number[]]>(array);
	}).not.toThrow();
	expect(() => {
		assertMinArrayLength([1], 2);
	}).toThrow(`Expected Minimum Array Length: 2, Actual: 1`);
	expect(() => {
		assertMinArrayLength([], 1, "Custom Error");
	}).toThrow("Custom Error");
	const customError = new TestError("Test Error");
	expect(() => {
		assertMinArrayLength([], 1, () => customError);
	}).toThrow(customError);
});

test("test isNonEmptyArrayLength", () => {
	const array1 = [1, 2, 3];
	const check1 = isNonEmptyArray(array1);
	expect(check1).toBeTruthy();
	// eslint-disable-next-line vitest/no-conditional-in-test
	if (check1) {
		expectTypeOf<[number, ...number[]]>(array1);
	} else {
		expectTypeOf<number[]>(array1);
	}

	const check2 = isNonEmptyArray([]);
	expect(check2).toBeFalsy();
});

test("test assertNonEmptyArray", () => {
	expect(() => {
		const array = [1, 2, 3];
		assertNonEmptyArray(array);
		expectTypeOf<[number, ...number[]]>(array);
	}).not.toThrow();
	expect(() => {
		assertNonEmptyArray([]);
	}).toThrow("Array is empty!");
	expect(() => {
		assertNonEmptyArray([], "Custom Error");
	}).toThrow("Custom Error");
	const customError = new TestError("Test Error");
	expect(() => {
		assertNonEmptyArray([], () => customError);
	}).toThrow(customError);
});

test("test isArrayLength", () => {
	const array1 = [1, 2, 3];
	const check1 = isArrayLength(array1, 3);
	expect(check1).toBeTruthy();
	// eslint-disable-next-line vitest/no-conditional-in-test
	if (check1) {
		expectTypeOf<[number, ...number[]]>(array1);
	} else {
		expectTypeOf<number[]>(array1);
	}

	const check2 = isArrayLength([], 2);
	expect(check2).toBeFalsy();
});

test("test assertArrayLength", () => {
	expect(() => {
		const array = [1, 2, 3];
		assertArrayLength(array, 3);
		expectTypeOf<[number, number, number]>(array);
	}).not.toThrow();
	expect(() => {
		assertArrayLength([1, 2], 3);
	}).toThrow("Expected Array Length: 3, Actual: 2");
	expect(() => {
		assertArrayLength([1, 2], 3, "Custom Error");
	}).toThrow("Custom Error");
	const customError = new TestError("Test Error");
	expect(() => {
		assertArrayLength([], 2, () => customError);
	}).toThrow(customError);
});

test("test range", () => {
	const result = range(1, 10);
	expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	const result2 = range(5, 10);
	expect(result2).toStrictEqual([5, 6, 7, 8, 9, 10]);

	const result3 = range(10, 10);
	expect(result3).toStrictEqual([10]);

	const result4 = range(10, 5);
	expect(result4).toStrictEqual([]);

	const result5 = range(0, 0);
	expect(result5).toStrictEqual([0]);
});

test("testing inPlaceInsertToSortedArray helper for number values", () => {
	const arr1: number[] = [];
	const sourceArr = [];
	for (let i = 0; i < 100_000; i++) {
		sourceArr.push(getRandomInteger(0, 100_000));
	}
	const sorted1 = sourceArr.toSorted((a, b) => a - b);
	for (const value of sourceArr) {
		inPlaceInsertToSortedArray(arr1, value, (a, b) => a - b);
	}
	expect(arr1).toStrictEqual(sorted1);
});

test("testing inPlaceInsertToSortedArray helper for string values", () => {
	const source2 = [
		"FIRST",
		"SECOND",
		"THIRD",
		"FOURTH",
		"FIFTH",
		"SIXTH",
		"SEVENTH",
		"EIGHTH",
		"NINTH",
		"TENTH",
	];
	const sorted2 = source2.toSorted((a, b) => a.localeCompare(b));
	const res2: string[] = [];
	for (const value of source2) {
		inPlaceInsertToSortedArray(res2, value);
	}
	expect(res2).toStrictEqual(sorted2);
});

test("testing inPlaceInsertToSortedArray helper for object values", () => {
	const source3 = [
		{ foo: 37, bar: 2 },
		{ foo: 2, bar: 1 },
		{ foo: 5, bar: 1 },
		{ foo: 3, bar: 1 },
		{ foo: 18, bar: 1 },
	];
	const sorted3 = source3.toSorted((a, b) => b.foo - a.foo);
	const res3: Array<{ foo: number; bar: number }> = [];
	for (const value of source3) {
		inPlaceInsertToSortedArray(res3, value, (a, b) => b.foo - a.foo);
	}
	expect(res3).toStrictEqual(sorted3);
});

test("testing filterInPlace helper", () => {
	const sourceArr = [];
	for (let i = 0; i < 10_000; i++) {
		sourceArr.push(i + 1);
	}
	const prev = [...sourceArr];
	const removed = filterInPlace(sourceArr, (val) => val > 5_000);
	expect(removed).toBe(5_000);
	expect(sourceArr).toStrictEqual(prev.filter((r) => r > 5_000));
});

test("testing getSubTuple helper", () => {
	const source = ["foo", "bar", "baz"] as const;

	const result1 = getSubTuple(source, "bar", "after");
	const expected1 = ["bar", "baz"] as const;
	expect(result1).toStrictEqual(expected1);
	type TTrue1 = Utils.equal<typeof result1, typeof expected1>;
	expectTypeOf<TTrue1>(true);

	const result2 = getSubTuple(source, "bar", "before");
	const expected2 = ["foo", "bar"] as const;
	expect(result2).toStrictEqual(expected2);
	type TTrue2 = Utils.equal<typeof result2, typeof expected2>;
	expectTypeOf<TTrue2>(true);
});

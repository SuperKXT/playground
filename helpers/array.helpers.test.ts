import { expect, test } from "vitest";

import {
	areArraysEqual,
	filterInPlace,
	inPlaceInsertToSortedArray,
} from "./array.helpers.js";
import { getRandomInteger } from "./random.helpers.js";

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
	const originalArr = ["a", "b", "c", "d", "e"];
	const arr = [...originalArr];

	inPlaceInsertToSortedArray(arr, "f", (a, b) => a.localeCompare(b));
	const expected1 = [...originalArr, "f"];
	expect(arr).toStrictEqual(expected1);

	inPlaceInsertToSortedArray(arr, "z", (a, b) => a.localeCompare(b));
	const expected2 = [...originalArr, "f", "z"];
	expect(arr).toStrictEqual(expected2);

	inPlaceInsertToSortedArray(arr, "h", (a, b) => a.localeCompare(b));
	const expected3 = [...originalArr, "f", "h", "z"];
	expect(arr).toStrictEqual(expected3);
});

test("testing inPlaceInsertToSortedArray helper for object values", () => {
	const arr: Array<{ foo: string }> = [];

	inPlaceInsertToSortedArray(arr, { foo: "z" }, (a, b) =>
		a.foo.localeCompare(b.foo),
	);
	const expected1 = [{ foo: "z" }];
	expect(arr).toStrictEqual(expected1);

	inPlaceInsertToSortedArray(arr, { foo: "f" }, (a, b) =>
		a.foo.localeCompare(b.foo),
	);
	const expected2 = [{ foo: "f" }, { foo: "z" }];
	expect(arr).toStrictEqual(expected2);

	inPlaceInsertToSortedArray(arr, { foo: "h" }, (a, b) =>
		a.foo.localeCompare(b.foo),
	);
	const expected3 = [{ foo: "f" }, { foo: "h" }, { foo: "z" }];
	expect(arr).toStrictEqual(expected3);
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

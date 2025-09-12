import { expect, test } from "vitest";

import { mergeSortedArrays } from "./merge-sorted-array.js";

test("testing mergeSortedArrays for test 1", () => {
	const nums1 = [1, 2, 3, 0, 0, 0];
	const nums2 = [2, 5, 6];
	mergeSortedArrays(nums1, nums2);
	const expected = [1, 2, 2, 3, 5, 6];
	expect(nums1).toStrictEqual(expected);
});

test("testing mergeSortedArrays for test 2", () => {
	const nums1 = [1];
	const nums2 = [] as number[];
	mergeSortedArrays(nums1, nums2);
	const expected = [1];
	expect(nums1).toStrictEqual(expected);
});

test("testing mergeSortedArrays for test 3", () => {
	const nums1 = [0];
	const nums2 = [1];
	mergeSortedArrays(nums1, nums2);
	const expected = [1];
	expect(nums1).toStrictEqual(expected);
});

test("testing mergeSortedArrays for test 4", () => {
	const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
	const nums2 = [1, 2, 2];
	mergeSortedArrays(nums1, nums2);
	const expected = [-1, 0, 0, 1, 2, 2, 3, 3, 3];
	expect(nums1).toStrictEqual(expected);
});

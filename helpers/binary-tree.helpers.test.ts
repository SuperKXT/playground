import { assertType, expect, test } from "vitest";

import { arrayToBinaryTree, binaryTreeToArray } from "./binary-tree.helpers.js";

import type { TBinaryTreeNode } from "./binary-tree.helpers.js";

test("testing arrayToBinaryTree helper", () => {
	const test1 = {
		response: arrayToBinaryTree([1, 2, 3]),
		expected: {
			val: 1,
			left: { val: 2, left: null, right: null },
			right: { val: 3, left: null, right: null },
		} as TBinaryTreeNode<number>,
	};
	expect(test1.response).toStrictEqual(test1.expected);
	assertType<(typeof test1)["response"]>(test1.expected);

	const test2 = {
		response: arrayToBinaryTree([]),
		expected: null,
	};
	expect(test2.response).toStrictEqual(test2.expected);
	assertType<(typeof test2)["response"]>(test2.expected);

	const test3 = {
		response: arrayToBinaryTree([1, null, 2, null, null, 3]),
		expected: {
			val: 1,
			left: null,
			right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
		} as TBinaryTreeNode<number>,
	};
	expect(test3.response).toStrictEqual(test3.expected);
	assertType<(typeof test3)["response"]>(test3.expected);

	const test4 = {
		response: arrayToBinaryTree([
			1,
			2,
			3,
			4,
			5,
			null,
			8,
			null,
			null,
			6,
			7,
			null,
			null,
			9,
		]),
		expected: {
			val: 1,
			left: {
				val: 2,
				left: { val: 4, left: null, right: null },
				right: {
					val: 5,
					left: { val: 6, left: null, right: null },
					right: { val: 7, left: null, right: null },
				},
			},
			right: {
				val: 3,
				left: null,
				right: {
					val: 8,
					left: { val: 9, left: null, right: null },
					right: null,
				},
			},
		} as TBinaryTreeNode<number>,
	};
	expect(test4.response).toStrictEqual(test4.expected);
	assertType<(typeof test4)["response"]>(test4.expected);
});

test("testing binaryTreeToArray helper", () => {
	const arr1 = [1, 2, 3];
	const tree1 = arrayToBinaryTree(arr1);
	const test1 = {
		response: binaryTreeToArray(tree1),
		expected: arr1,
	};
	expect(test1.response).toStrictEqual(test1.expected);
	assertType<(typeof test1)["response"]>(test1.expected);

	const arr2 = [] as number[];
	const tree2 = arrayToBinaryTree(arr2);
	const test2 = {
		response: binaryTreeToArray(tree2),
		expected: arr2,
	};
	expect(test2.response).toStrictEqual(test2.expected);
	assertType<(typeof test2)["response"]>(test2.expected);

	const arr3 = [1, null, 2, null, null, 3];
	const tree3 = arrayToBinaryTree(arr3);
	const test3 = {
		response: binaryTreeToArray(tree3),
		expected: arr3,
	};
	expect(test3.response).toStrictEqual(test3.expected);
	assertType<(typeof test3)["response"]>(test3.expected);

	const arr4 = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, null, null, 9];
	const tree4 = arrayToBinaryTree(arr4);
	const test4 = {
		response: binaryTreeToArray(tree4),
		expected: arr4,
	};
	expect(test4.response).toStrictEqual(test4.expected);
	assertType<(typeof test4)["response"]>(test4.expected);
});

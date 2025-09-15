import { assertType, expect, test } from "vitest";

import { arrayToBinaryTree } from "./binary-tree.helpers.js";

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

	const arr = arrayToBinaryTree([
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
	]);
	console.log(JSON.stringify(arr));
	const test4 = {
		response: arr,
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

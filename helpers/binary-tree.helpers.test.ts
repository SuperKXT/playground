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
});

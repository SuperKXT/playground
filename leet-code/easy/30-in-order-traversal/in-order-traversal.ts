// https://leetcode.com/problems/same-tree

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

export const inOrderTraversal = (node: TBinaryTreeNode<number>): number[] => {
	if (!node) return [];
	return [
		...inOrderTraversal(node.left),
		node.val,
		...inOrderTraversal(node.right),
	];
};

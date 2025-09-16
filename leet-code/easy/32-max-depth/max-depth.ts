// https://leetcode.com/problems/symmetric-tree/

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

const getDepth = (node: TBinaryTreeNode<number>, depth: number): number => {
	if (!node) return depth;
	return Math.max(
		getDepth(node.left, depth + 1),
		getDepth(node.right, depth + 1),
	);
};

export const maxDepth = (root: TBinaryTreeNode<number>): number => {
	return getDepth(root, 0);
};

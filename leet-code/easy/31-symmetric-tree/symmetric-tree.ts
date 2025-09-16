// https://leetcode.com/problems/symmetric-tree/

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

const compareNodes = (
	a: TBinaryTreeNode<number>,
	b: TBinaryTreeNode<number>,
): boolean => {
	if (!a && !b) return true;
	if (!a || !b || a.val !== b.val) return false;
	return compareNodes(a.left, b.right) && compareNodes(a.right, b.left);
};

export const symmetricTree = (root: TBinaryTreeNode<number>): boolean => {
	if (!root) return true;
	return compareNodes(root.left, root.right);
};

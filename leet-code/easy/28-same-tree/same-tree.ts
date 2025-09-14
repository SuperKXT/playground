// https://leetcode.com/problems/same-tree

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

const checkNode = (
	p: TBinaryTreeNode<number>,
	q: TBinaryTreeNode<number>,
): boolean => {
	if (!p && !q) return true;
	if (!p || !q) return false;
	if (p.val !== q.val) return false;
	return checkNode(p.left, q.left) && checkNode(p.right, q.right);
};

export const sameTree = (
	p: TBinaryTreeNode<number>,
	q: TBinaryTreeNode<number>,
): boolean => {
	return checkNode(p, q);
};

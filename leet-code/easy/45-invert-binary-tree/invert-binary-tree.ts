// https://leetcode.com/problems/invert-binary-tree

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

export const invertTree = (
	root: TBinaryTreeNode<number>,
): TBinaryTreeNode<number> => {
	if (!root) return root;
	const left = root.left;
	root.left = invertTree(root.right);
	root.right = invertTree(left);
	return root;
};

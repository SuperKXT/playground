// https://leetcode.com/problems/count-complete-tree-nodes

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

const getCount = (node: TBinaryTreeNode<number>, count: number): number => {
	if (!node) return count;
	let updated = count + 1;
	updated += getCount(node.left, count);
	updated += getCount(node.right, count);
	return updated;
};

export const countNodes = (root: TBinaryTreeNode<number>): number => {
	return getCount(root, 0);
};

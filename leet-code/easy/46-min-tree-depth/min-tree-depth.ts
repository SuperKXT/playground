// https://leetcode.com/problems/minimum-depth-of-binary-tree

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

const getDepths = (node: TBinaryTreeNode<number>, depth: number): number[] => {
	if (!node) return [depth];
	if (!node.left && !node.right) return [depth + 1];
	const depths: number[] = [];
	if (node.left) depths.push(...getDepths(node.left, depth + 1));
	if (node.right) depths.push(...getDepths(node.right, depth + 1));
	return depths;
};

export const minDepth = (root: TBinaryTreeNode<number>): number => {
	return Math.min(...getDepths(root, 0));
};

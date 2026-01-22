// https://leetcode.com/problems/maximum-depth-of-binary-tree

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

// const getDepths = (node: TBinaryTreeNode<number>, depth: number): number[] => {
// 	if (!node) return [depth];
// 	if (!node.left && !node.right) return [depth + 1];
// 	const depths: number[] = [];
// 	if (node.left) depths.push(...getDepths(node.left, depth + 1));
// 	if (node.right) depths.push(...getDepths(node.right, depth + 1));
// 	return depths;
// };

// export const maxDepth = (root: TBinaryTreeNode<number>): number => {
// 	return Math.max(...getDepths(root, 0));
// };

const getMaxDepth = (
	node: TBinaryTreeNode<number>,
	depth: number = 0,
): number => {
	if (!node) return depth;
	return Math.max(
		getMaxDepth(node.left, depth + 1),
		getMaxDepth(node.right, depth + 1),
	);
};

export const maxDepth = (root: TBinaryTreeNode<number>): number => {
	return getMaxDepth(root);
};

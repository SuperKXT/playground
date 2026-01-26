// https://leetcode.com/problems/count-complete-tree-nodes

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

// const getCount = (node: TBinaryTreeNode<number>, count: number): number => {
// 	if (!node) return count;
// 	let updated = count + 1;
// 	updated += getCount(node.left, count);
// 	updated += getCount(node.right, count);
// 	return updated;
// };

// export const countNodes = (root: TBinaryTreeNode<number>): number => {
// 	return getCount(root, 0);
// };

const getDepth = (
	node: Exclude<TBinaryTreeNode<number>, null>,
	dir: "right" | "left",
): number => {
	if (!node[dir]) return 1;
	return 1 + getDepth(node[dir], dir);
};

const _countNodes = (root: Exclude<TBinaryTreeNode<number>, null>): number => {
	if (!root.left && !root.right) return 1;
	if (!root.left)
		return 1 + _countNodes(root.right as NonNullable<typeof root.right>);
	if (!root.right) return 1 + _countNodes(root.left);
	const leftDepth = getDepth(root, "left");
	const rightDepth = getDepth(root, "right");
	if (leftDepth === rightDepth) return 2 ** leftDepth - 1;
	return 1 + _countNodes(root.left) + _countNodes(root.right);
};

export const countNodes = (root: TBinaryTreeNode<number>): number => {
	if (!root) return 0;
	return _countNodes(root);
};

// https://leetcode.com/problems/find-mode-in-binary-search-tree

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

type TCountRes = { vals: number[]; map: Map<number, number>; max: number };

const getCounts = (node: TBinaryTreeNode<number>, res: TCountRes): void => {
	if (node === null) return;
	const count = (res.map.get(node.val) ?? 0) + 1;
	if (count === res.max) {
		res.vals.push(node.val);
	}
	if (count > res.max) {
		res.max = count;
		res.vals = [node.val];
	}
	res.map.set(node.val, count);

	getCounts(node.left, res);
	getCounts(node.right, res);
};

export const findMode = (root: TBinaryTreeNode<number>): number[] => {
	const res: TCountRes = {
		map: new Map(),
		max: -Infinity,
		vals: [],
	};
	getCounts(root, res);
	return res.vals;
};

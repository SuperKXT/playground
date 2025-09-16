// https://leetcode.com/problems/same-tree

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

// !----------------
// !RECURSIVE SOLUTION
// !----------------

// export const inOrderTraversal = (node: TBinaryTreeNode<number>): number[] => {
// 	if (!node) return [];
// 	return [
// 		...inOrderTraversal(node.left),
// 		node.val,
// 		...inOrderTraversal(node.right),
// 	];
// };

// !----------------
// !ITERATIVE SOLUTION
// !----------------

// export const inOrderTraversal = (node: TBinaryTreeNode<number>): number[] => {
// 	if (!node) return [];
// 	const res: number[] = [];
// 	const stack: TBinaryTreeNode<number>[] = [];
// 	const visited = new Set<TBinaryTreeNode<number>>();
// 	let curr: TBinaryTreeNode<number> = node;
// 	while (curr) {
// 		if (curr.left && !visited.has(curr.left)) {
// 			stack.push(curr);
// 			curr = curr.left;
// 		} else {
// 			if (!visited.has(curr)) {
// 				res.push(curr.val);
// 				visited.add(curr);
// 			}
// 			if (curr.right && !visited.has(curr.right)) {
// 				curr = curr.right;
// 			} else {
// 				curr = stack.pop() ?? null;
// 			}
// 		}
// 	}
// 	return res;
// };

export const inOrderTraversal = (node: TBinaryTreeNode<number>): number[] => {
	if (!node) return [];
	const res: number[] = [];
	const stack: TBinaryTreeNode<number>[] = [];
	let curr: TBinaryTreeNode<number> = node;
	while (curr || stack.length > 0) {
		while (curr) {
			stack.push(curr);
			curr = curr.left;
		}
		curr = stack.pop() ?? null;
		if (!curr) continue;
		res.push(curr.val);
		curr = curr.right;
	}
	return res;
};

// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";

export const sortedArrayToBST = (nums: number[]): TBinaryTreeNode<number> => {
	const mid = Math.floor(nums.length / 2);
	const midVal = nums[mid];
	if (midVal === undefined) return null;
	return {
		val: midVal,
		left: sortedArrayToBST(nums.slice(0, mid)),
		right: sortedArrayToBST(nums.slice(mid + 1)),
	};
};

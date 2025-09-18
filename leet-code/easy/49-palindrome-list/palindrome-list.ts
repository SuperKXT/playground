// https://leetcode.com/problems/count-complete-tree-nodes

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

export const palindromeList = (head: TLinkedListNode<number>): boolean => {
	let forward = "";
	let reverse = "";
	let curr = head;
	while (curr) {
		forward += curr.val.toString();
		reverse = curr.val.toString() + reverse;
		curr = curr.next;
	}
	return forward === reverse;
};

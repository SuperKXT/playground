// https://leetcode.com/problems/delete-node-in-a-linked-list

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

export const deleteNode = (node: TLinkedListNode): void => {
	if (!node?.next) return;
	node.val = node.next.val;
	node.next = node.next.next;
};

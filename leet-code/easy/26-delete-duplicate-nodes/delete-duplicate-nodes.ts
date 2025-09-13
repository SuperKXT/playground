// https://leetcode.com/problems/remove-duplicates-from-sorted-list

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

export const deleteDuplicateNodes = (
	head: TLinkedListNode<number>,
): TLinkedListNode<number> => {
	if (!head) return head;
	let curr: TLinkedListNode<number> = head;
	while (curr) {
		if (curr.next?.val === curr.val) {
			curr.next = curr.next.next;
		} else {
			curr = curr.next;
		}
	}
	return head;
};

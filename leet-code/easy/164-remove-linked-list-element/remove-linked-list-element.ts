// https://leetcode.com/problems/remove-linked-list-elements

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

// export const removeElements = (
// 	head: TLinkedListNode<number> | null,
// 	val: number,
// ): TLinkedListNode<number> | null => {
// 	let res = head;
// 	while (res?.val === val) {
// 		res = res.next;
// 	}

// 	let curr = res;
// 	while (curr !== null) {
// 		if (curr.next?.val === val) {
// 			curr.next = curr.next.next;
// 		} else {
// 			curr = curr.next;
// 		}
// 	}
// 	return res;
// };

export const removeElements = (
	head: TLinkedListNode<number> | null,
	val: number,
): TLinkedListNode<number> | null => {
	if (head === null) return head;
	head.next = removeElements(head.next, val);
	return head.val === val ? head.next : head;
};

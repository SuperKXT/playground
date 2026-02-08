// https://leetcode.com/problems/remove-linked-list-elements

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

type TRemoveElements<Node extends TLinkedListNode<number>, Val extends number> =
	Node extends Exclude<TLinkedListNode<number>, null>
		? Node["val"] extends Val
			? TRemoveElements<Node["next"], Val>
			: { val: Node["val"]; next: TRemoveElements<Node["next"], Val> }
		: null;

// export const removeElements = <
// 	Node extends TLinkedListNode<number>,
// 	Val extends number,
// >(
// 	head: Node,
// 	val: Val,
// ): TRemoveElements<Node, Val> => {
// 	let res = head;
// 	while (res?.val === val) {
// 		res = res.next as never;
// 	}

// 	let curr = res;
// 	while (curr !== null) {
// 		if (curr.next?.val === val) {
// 			curr.next = curr.next.next;
// 		} else {
// 			curr = curr.next as never;
// 		}
// 	}
// 	return res as never;
// };

export const removeElements = <
	Node extends TLinkedListNode<number>,
	Val extends number,
>(
	head: Node,
	val: Val,
): TRemoveElements<Node, Val> => {
	if (head === null) return head as never;
	head.next = removeElements(head.next, val);
	return (head.val === val ? head.next : head) as never;
};

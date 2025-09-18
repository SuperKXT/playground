// https://leetcode.com/problems/reverse-linked-list

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

type TReverseLinkedList<
	Node extends TLinkedListNode,
	Prev extends TLinkedListNode = null,
> =
	Node extends NonNullable<TLinkedListNode>
		? TReverseLinkedList<Node["next"], { val: Node["val"]; next: Prev }>
		: Prev;

// export const reverseLinkedList = <Node extends TLinkedListNode>(
// 	head: Node,
// ): TReverseLinkedList<Node> => {
// 	if (!head) return null as never;
// 	let curr = head.next;
// 	let reversed: NonNullable<TLinkedListNode> = {
// 		val: head.val,
// 		next: null,
// 	};
// 	while (curr) {
// 		reversed = { val: curr.val, next: reversed };
// 		curr = curr.next;
// 	}
// 	return reversed as never;
// };

const reverseList = (
	node: TLinkedListNode,
	prev: TLinkedListNode,
): TLinkedListNode => {
	if (!node) return prev;
	return reverseList(node.next, { val: node.val, next: prev });
};

export const reverseLinkedList = <Node extends TLinkedListNode>(
	head: Node,
): TReverseLinkedList<Node> => {
	return reverseList(head, null) as never;
};

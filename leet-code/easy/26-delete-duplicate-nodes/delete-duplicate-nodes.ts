// https://leetcode.com/problems/remove-duplicates-from-sorted-list

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

type _TDeleteDuplicateNodes<
	Node extends TLinkedListNode,
	Prev extends Exclude<TLinkedListNode, null>,
> =
	Node extends Exclude<Node, null>
		? Node["val"] extends Prev["val"]
			? _TDeleteDuplicateNodes<Node["next"], Node>
			: {
					val: Node["val"];
					next: _TDeleteDuplicateNodes<Node["next"], Node>;
				}
		: null;

type TDeleteDuplicateNodes<Node extends TLinkedListNode> =
	Node extends Exclude<Node, null>
		? { val: Node["val"]; next: _TDeleteDuplicateNodes<Node["next"], Node> }
		: null;

export const deleteDuplicateNodes = <Head extends TLinkedListNode<number>>(
	head: Head,
): TDeleteDuplicateNodes<Head> => {
	let curr: TLinkedListNode<number> = head;
	while (curr) {
		if (curr.next?.val === curr.val) {
			curr.next = curr.next.next;
		} else {
			curr = curr.next;
		}
	}
	return head as never;
};

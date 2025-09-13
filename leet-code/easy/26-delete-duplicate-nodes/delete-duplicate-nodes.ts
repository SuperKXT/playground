// https://leetcode.com/problems/remove-duplicates-from-sorted-list

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

type TDeleteDuplicateNodes<Node extends TLinkedListNode> =
	Node extends Exclude<Node, null>
		? {
				val: Node["val"];
				next: Node["next"] extends Exclude<Node["next"], null>
					? Node["val"] extends Node["next"]["val"]
						? TDeleteDuplicateNodes<Node["next"]["next"]>
						: TDeleteDuplicateNodes<Node["next"]>
					: null;
			}
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

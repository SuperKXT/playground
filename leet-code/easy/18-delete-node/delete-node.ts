import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

export const deleteNode = (node: TLinkedListNode): void => {
	if (!node?.next) return;
	node.value = node.next.value;
	node.next = node.next.next;
};

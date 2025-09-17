// https://leetcode.com/problems/intersection-of-two-linked-lists

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

export const intersectionNode = (
	a: TLinkedListNode<number>,
	b: TLinkedListNode<number>,
): TLinkedListNode<number> => {
	const set = new Set<TLinkedListNode<number>>();
	let curr = a;
	while (curr) {
		set.add(curr);
		curr = curr.next;
	}
	curr = b;
	while (curr) {
		if (set.has(curr)) return curr;
		curr = curr.next;
	}
	return null;
};

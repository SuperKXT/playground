// https://leetcode.com/problems/linked-list-cycleLink

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

export const linkedListCycle = (head: TLinkedListNode): boolean => {
	const set = new Set();
	let curr = head;
	while (curr) {
		if (set.has(curr)) return true;
		set.add(curr);
		curr = curr.next;
	}
	return false;
};

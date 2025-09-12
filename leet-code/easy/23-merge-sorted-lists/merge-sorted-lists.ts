// https://leetcode.com/problems/merge-two-sorted-lists

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

type TNode = TLinkedListNode<number>;

export const mergeSortedLists = (list1: TNode, list2: TNode): TNode => {
	let node1: TNode = list1;
	let node2: TNode = list2;
	if (!node1 && !node2) return null;
	const res: TNode = {
		value: Math.min(node1?.value ?? Infinity, node2?.value ?? Infinity),
		next: null,
	};
	let curr = res;

	if (res.value === node1?.value) node1 = node1.next;
	else if (node2) node2 = node2.next;

	while (node1 || node2) {
		curr.next = {
			value: Math.min(node1?.value ?? Infinity, node2?.value ?? Infinity),
			next: null,
		};
		if (curr.next.value === node1?.value) node1 = node1.next;
		else if (node2) node2 = node2.next ?? null;
		curr = curr.next;
	}

	return res;
};

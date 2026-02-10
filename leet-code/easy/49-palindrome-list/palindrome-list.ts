// https://leetcode.com/problems/palindrome-linked-list/

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

type TPalindromeList<
	Node extends TLinkedListNode<number>,
	forward extends string = "",
	reverse extends string = "",
> =
	Node extends NonNullable<TLinkedListNode>
		? TPalindromeList<
				Node["next"],
				`${forward}${Node["val"]}`,
				`${Node["val"]}${reverse}`
			>
		: forward extends reverse
			? true
			: false;

export const palindromeList = <Head extends TLinkedListNode<number>>(
	head: Head,
): TPalindromeList<Head> => {
	let forward = "";
	let reverse = "";
	let curr: TLinkedListNode<number> = head;
	while (curr) {
		forward += curr.val.toString();
		reverse = curr.val.toString() + reverse;
		curr = curr.next;
	}
	return (forward === reverse) as never;
};

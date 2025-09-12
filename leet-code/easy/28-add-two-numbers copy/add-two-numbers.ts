// https://leetcode.com/problems/rotate-image

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

export const addTwoNumbers = (
	num1: TLinkedListNode<number>,
	num2: TLinkedListNode<number>,
	carry: number = 0,
): TLinkedListNode<number> => {
	if (!num1 && !num2 && !carry) return null;
	const currVal = num1?.val ?? 0;
	const nextVal = num2?.val ?? 0;
	const sum = carry + currVal + nextVal;
	return {
		val: sum % 10,
		next: addTwoNumbers(
			num1?.next ?? null,
			num2?.next ?? null,
			Math.trunc(sum / 10),
		),
	};
};

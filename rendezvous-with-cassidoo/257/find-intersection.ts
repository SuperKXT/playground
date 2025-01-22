import { areArraysEqual } from "../../helpers/array.helpers.js";

import type { TLinkedListNode } from "../../helpers/linked-list.helpers.js";

export type TIntersection = TLinkedListNode<number> | [number, number];

const findIntersection = (
	paramA: TLinkedListNode<number> | number[],
	paramB: TLinkedListNode<number> | number[],
): TIntersection | null => {
	if (!Array.isArray(paramA)) {
		let nodeA = paramA;

		while (nodeA) {
			let nodeB = paramB as TLinkedListNode<number>;
			while (nodeB) {
				if (JSON.stringify(nodeA) === JSON.stringify(nodeB)) return nodeA;

				nodeB = nodeB.next ?? null;
			}
			nodeA = nodeA.next;
		}
		return null;
	}
	const reversedA = [...paramA].reverse();
	const reversedB = [...(paramB as number[])].reverse();

	for (let index = 0; index < reversedA.length; index++) {
		const subA = reversedA.slice(0, reversedA.length - index);
		const subB = reversedB.slice(0, reversedA.length - index);

		if (areArraysEqual(subA, subB))
			return [index, reversedB.length - subB.length];
	}

	return null;
};

export { findIntersection };

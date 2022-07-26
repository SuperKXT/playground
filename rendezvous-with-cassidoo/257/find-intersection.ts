import { areArraysEqual } from '~/helpers/array';
import { LinkedListNode } from '~/helpers/linked-list';

export type Intersection = [number, number] | LinkedListNode<number>;

const findIntersection = <Type extends LinkedListNode<number> | number[]>(
	paramA: Type,
	paramB: Type
): Intersection | null => {

	if (!Array.isArray(paramA)) {

		let nodeA = paramA as LinkedListNode<number>;

		while (nodeA) {
			let nodeB = paramB as LinkedListNode<number>;
			while (nodeB) {
				if (
					JSON.stringify(nodeA)
					=== JSON.stringify(nodeB)
				) return nodeA;
				nodeB = nodeB.next ?? null;
			}
			nodeA = nodeA.next;
		}
		return null;
	}
	else {

		const reversedA = [...(paramA as number[])].reverse();
		const reversedB = [...(paramB as number[])].reverse();

		for (let index = 0; index < reversedA.length; index++) {

			const subA = reversedA.slice(0, reversedA.length - index);
			const subB = reversedB.slice(0, reversedA.length - index);

			if (areArraysEqual(subA, subB)) {
				return [
					index,
					reversedB.length - subB.length,
				];
			}

		}

		return null;

	}

};

export {
	findIntersection,
};

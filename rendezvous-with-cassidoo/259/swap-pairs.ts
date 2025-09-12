import type { TLinkedList } from "../../helpers/linked-list.helpers.js";

export const swapArrayPairsWithRegex = (array: number[]): number[] =>
	array
		.join("")
		.replace(/(.)(.)/gu, "$2$1")
		.split("")
		.map(Number);

export const swapArrayPairsWithRecursion = (array: number[]): number[] => {
	const [first, second, ...rest] = array;
	const swapped: number[] = [];
	first && swapped.push(first);
	second && swapped.unshift(second);
	rest.length > 0 && swapped.push(...swapArrayPairsWithRecursion(rest));
	return swapped;
};

export const swapArrayPairsWithLoop = (array: number[]): number[] => {
	const swapped: number[] = [];
	for (let index = 0; index < array.length; index += 2) {
		swapped.push(array[index + 1] ?? (array[index] as number));
		array[index + 1] && swapped.push(array[index] as number);
	}
	return swapped;
};

export const swapLinkedListPairs = (
	list: TLinkedList<number>,
): TLinkedList<number> => {
	const swapped = { ...list };
	let node = swapped.head;
	while (node?.val && node.next?.val !== undefined) {
		const current = node.next.val;
		node.next.val = node.val;
		node.val = current;
		node = node.next.next;
	}
	return swapped;
};

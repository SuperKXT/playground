// https://leetcode.com/problems/last-stone-weight

import { inPlaceInsertToSortedArray } from "../../../helpers/array.helpers.js";

export const lastStoneWeightImmutable = (stones: number[]): number => {
	const sorted = Array.from(stones);
	while (sorted.length > 1) {
		sorted.sort((a, b) => a - b);
		const first = sorted.pop() as number;
		const second = sorted.pop() as number;
		if (first > second) sorted.push(first - second);
	}
	return sorted[0] ?? 0;
};

export const lastStoneWeightMutable = (stones: number[]): number => {
	const sorted = stones.toSorted((a, b) => a - b);
	while (sorted.length > 1) {
		const first = sorted.pop() as number;
		const second = sorted.pop() as number;
		if (first > second) inPlaceInsertToSortedArray(sorted, first - second);
	}
	return sorted[0] ?? 0;
};

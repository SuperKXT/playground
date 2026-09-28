// https://leetcode.com/problems/last-stone-weight

import { inPlaceInsertToSortedArray } from "../../../helpers/array.helpers.js";

export const lastStoneWeightImmutable = (stones: number[]): number => {
	let sorted = stones.toSorted((a, b) => a - b);
	while (sorted.length > 1) {
		const first = sorted.at(-1) as number;
		const second = sorted.at(-2) as number;
		sorted = sorted.slice(0, -2);
		if (first === second) continue;
		const diff = first - second;
		let low = 0;
		let high = sorted.length;
		while (low < high) {
			const mid = Math.floor((low + high) / 2);
			if ((sorted[mid] as number) < diff) low = mid + 1;
			else high = mid;
		}
		sorted = sorted.toSpliced(low, 0, diff);
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

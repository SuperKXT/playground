// https://leetcode.com/problems/relative-sort-array

export const relativeSortArray = (arr1: number[], arr2: number[]): number[] => {
	const map = new Map<number, number>();
	for (let idx = 0; idx < arr2.length; idx++) {
		map.set(arr2[idx] as number, idx);
	}
	return arr1.sort((a, b) => {
		const aIdx = map.get(a);
		const bIdx = map.get(b);
		if (aIdx === undefined) {
			if (bIdx !== undefined) return 1;
			return a - b;
		}
		if (bIdx === undefined) return -1;
		return aIdx - bIdx;
	});
};

// https://leetcode.com/problems/degree-of-an-array

type TCount = { count: number; first: number; last: number };

export const arrayDegree = (nums: number[]): number => {
	const map = new Map<number, TCount>();
	let max = { count: 0, diff: 0 };
	for (let idx = 0; idx < nums.length; idx++) {
		const num = nums[idx] as number;
		let existing = map.get(num);
		if (!existing) {
			existing = { count: 1, first: idx, last: idx };
			map.set(num, existing);
		} else {
			existing.last = idx;
			existing.count++;
		}
		const diff = existing.last - existing.first + 1;
		const count = existing.count;
		if (count > max.count) {
			max = { count, diff };
		} else if (count === max.count && diff < max.diff) {
			max = { count, diff };
		}
	}
	return max.diff;
};

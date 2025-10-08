// https://leetcode.com/problems/binary-search

export const binarySearch = (nums: number[], target: number): number => {
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		const val = nums[mid] as number;
		if (val === target) return mid;
		if (val < target) start = mid + 1;
		else end = mid - 1;
	}
	return -1;
};

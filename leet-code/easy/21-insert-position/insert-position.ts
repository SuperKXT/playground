// https://leetcode.com/problems/search-insert-position

// export const insertPosition = (nums: number[], target: number): number => {
// 	for (let idx = 0; idx < nums.length; idx++) {
// 		const curr = nums[idx] as number;
// 		if (curr >= target) return idx;
// 	}
// 	return nums.length;
// };

export const insertPosition = (nums: number[], target: number): number => {
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		const curr = nums[mid] as number;
		if (target === curr) return mid;
		if (target > curr) start = mid + 1;
		else end = mid - 1;
	}
	return start;
};

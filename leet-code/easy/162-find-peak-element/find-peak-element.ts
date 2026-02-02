// https://leetcode.com/problems/find-peak-element

/* eslint-disable @typescript-eslint/no-non-null-assertion */

// export const findPeakElement = (nums: number[]): number => {
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i]! > nums[i - 1]! && nums[i]! > nums[i + 1]!) return i;
// 	}
// 	return -1;
// };

export const findPeakElement = (nums: number[]): number => {
	let left = 0;
	const right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor((right + left) / 2);
		if (nums[mid]! > nums[mid - 1]! && nums[mid]! > nums[mid + 1]!) {
			return mid;
		}
		left = mid + 1;
	}
	return -1;
};

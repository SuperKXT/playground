// https://leetcode.com/problems/find-peak-element

export const findPeakElement = (nums: number[]): number => {
	for (let i = 0; i < nums.length; i++) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		if (nums[i]! > nums[i - 1]! && nums[i]! > nums[i + 1]!) return i;
	}
	return -1;
};

// https://leetcode.com/problems/array-partition

export const arrayPartition = (nums: number[]): number => {
	nums.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < nums.length; i += 2) {
		sum += nums[i] as number;
	}
	return sum;
};

// https://leetcode.com/problems/missing-number

export const missingNumber = (nums: number[]): number => {
	let expectedSum = 0;
	let sum = 0;
	for (let idx = 0; idx < nums.length; idx++) {
		expectedSum += idx + 1;
		sum += nums[idx] as number;
	}
	return expectedSum - sum;
};

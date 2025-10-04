// https://leetcode.com/problems/maximum-average-subarray-i

export const maximumAverageSubarray = (nums: number[], k: number): number => {
	let max = -Infinity;
	for (let i = 0; i < nums.length - k + 1; i++) {
		const subarray = nums.slice(i, i + k);
		const sum = subarray.reduce((a, b) => a + b, 0);
		const avg = sum / k;
		max = Math.max(max, avg);
	}
	return max as never;
};

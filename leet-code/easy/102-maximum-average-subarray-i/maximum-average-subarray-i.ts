// https://leetcode.com/problems/maximum-average-subarray-i

// export const maximumAverageSubarray = (nums: number[], k: number): number => {
// 	let max = -Infinity;
// 	for (let i = 0; i < nums.length - k + 1; i++) {
// 		const subarray = nums.slice(i, i + k);
// 		const sum = subarray.reduce((a, b) => a + b, 0);
// 		const avg = sum / k;
// 		max = Math.max(max, avg);
// 	}
// 	return max as never;
// };

export const maximumAverageSubarray = (nums: number[], k: number): number => {
	let first = 0;
	let sum = 0;
	for (let i = 0; i < k; i++) {
		sum += nums[i] as number;
	}
	let max = sum / k;
	for (let i = k; i < nums.length; i++) {
		sum = sum - (nums[first] as number) + (nums[i] as number);
		first++;
		max = Math.max(max, sum / k);
	}
	return max as never;
};

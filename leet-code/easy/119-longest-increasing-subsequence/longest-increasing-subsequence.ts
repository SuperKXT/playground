// https://leetcode.com/problems/longest-continuous-increasing-subsequence

export const longestIncreasingSubsequence = (nums: number[]): number => {
	let last: undefined | number;
	let curr = 0;
	let max = 0;
	for (const num of nums) {
		if (last !== undefined && last >= num) {
			max = Math.max(max, curr);
			curr = 1;
		} else {
			curr++;
		}
		last = num;
	}
	return Math.max(max, curr);
};

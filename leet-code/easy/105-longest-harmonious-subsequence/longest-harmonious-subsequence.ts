// https://leetcode.com/problems/longest-harmonious-subsequence

export const longestHarmoniousSubsequence = (nums: number[]): number => {
	if (nums.length < 2) return 0;
	nums.sort((a, b) => a - b);
	let start = 0;
	let end = 1;
	let max = 0;
	while (start < nums.length - 1) {
		const first = nums[start] as number;
		const last = nums[end] as number;
		if (last - first === 1) {
			const diff = end - start + 1;
			if (diff > max) max = diff;
			if (end === nums.length - 1) break;
			end++;
		} else if (last - first === 0) {
			end++;
		} else {
			start++;
		}
	}

	return max;
};

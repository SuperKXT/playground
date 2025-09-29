// https://leetcode.com/problems/max-consecutive-ones

export const maxConsecutiveOnes = (nums: number[]): number => {
	let max = 0;
	let curr = 0;
	for (const char of nums) {
		if (char === 1) curr++;
		else curr = 0;
		if (curr > max) max = curr;
	}
	return max as never;
};

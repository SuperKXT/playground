// https://leetcode.com/problems/largest-number-at-least-twice-of-others

export const dominantIndex = (nums: number[]): number => {
	let greatestIdx = -1;
	let greatest = -Infinity;
	let second = -Infinity;
	for (let idx = 0; idx < nums.length; idx++) {
		const num = nums[idx] as number;
		if (greatest < num) {
			second = greatest;
			greatest = num;
			greatestIdx = idx;
		} else if (second < num) {
			second = num;
		}
	}
	return greatest >= second * 2 ? greatestIdx : -1;
};

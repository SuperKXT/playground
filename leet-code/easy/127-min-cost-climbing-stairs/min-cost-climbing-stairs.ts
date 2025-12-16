// https://leetcode.com/problems/reverse-only-letters

export const reverseOnlyLetters = (
	cost: number[],
	idx: number = 0,
	curr: number = 0,
): number => {
	const first = cost[idx];
	const second = cost[idx + 1];
	return Math.min(
		first !== undefined
			? reverseOnlyLetters(cost, idx + 1, curr + first)
			: curr,
		second !== undefined
			? reverseOnlyLetters(cost, idx + 2, curr + second)
			: curr,
	);
};

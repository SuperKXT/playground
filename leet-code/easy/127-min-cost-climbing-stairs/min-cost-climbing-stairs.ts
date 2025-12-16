// https://leetcode.com/problems/min-cost-climbing-stairs

export const minCostClimbingStairs = (
	cost: number[],
	idx: number = 0,
	curr: number = 0,
): number => {
	const first = cost[idx];
	const second = cost[idx + 1];
	return Math.min(
		first !== undefined
			? minCostClimbingStairs(cost, idx + 1, curr + first)
			: curr,
		second !== undefined
			? minCostClimbingStairs(cost, idx + 2, curr + second)
			: curr,
	);
};

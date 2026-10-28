const _climbStairs = (n: number, curr: number): number[] => {
	if (curr >= n) return [];
	if (curr + 1 === n) return [1];
	if (curr + 2 === n) return [1, 1];
	return [..._climbStairs(n, curr + 1), ..._climbStairs(n, curr + 2)];
};

export const climbStairs = (n: number): number => {
	return _climbStairs(n, 0).length;
};

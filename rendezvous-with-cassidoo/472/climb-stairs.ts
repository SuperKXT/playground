const _climbStairs = (n: number, curr: number, count = 0): number => {
	if (curr >= n) return 0;
	if (curr + 1 === n) return 1;
	if (curr + 2 === n) return 2;
	return (
		_climbStairs(n, curr + 1, count + 1) + _climbStairs(n, curr + 2, count + 1)
	);
};

export const climbStairs = (n: number): number => {
	return _climbStairs(n, 0);
};

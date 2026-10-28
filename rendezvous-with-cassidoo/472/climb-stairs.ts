type _TClimbStairs<
	N extends number,
	curr extends Array<1>,
	count extends Array<1>,
> = curr[N] extends 1
	? []
	: [...curr, 1]["length"] extends N
		? [1]
		: [...curr, 1, 1]["length"] extends N
			? [1, 1]
			: [
					..._TClimbStairs<N, [...curr, 1], [...count, 1]>,
					..._TClimbStairs<N, [...curr, 1, 1], [...count, 1]>,
				];

type TClimbStairs<N extends number> = _TClimbStairs<N, [], []>["length"];

const _climbStairs = (n: number, curr: number, count: number): number => {
	if (curr >= n) return 0;
	if (curr + 1 === n) return 1;
	if (curr + 2 === n) return 2;
	return (
		_climbStairs(n, curr + 1, count + 1) + _climbStairs(n, curr + 2, count + 1)
	);
};

export const climbStairs = <N extends number>(n: N): TClimbStairs<N> => {
	return _climbStairs(n, 0, 0) as never;
};

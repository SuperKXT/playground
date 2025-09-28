// https://leetcode.com/problems/arranging-coins

type TArrangeCoins<
	N extends number,
	required extends 1[] = [1],
	curr extends 1[] = [],
	rows extends 1[] = [],
	idx extends 1[] = [],
	next extends 1[] = [...curr, 1],
> = idx["length"] extends N
	? rows["length"]
	: next["length"] extends required["length"]
		? TArrangeCoins<N, [...required, 1], [], [...rows, 1], [...idx, 1]>
		: TArrangeCoins<N, required, next, rows, [...idx, 1]>;

export const arrangeCoins = <N extends number>(n: N): TArrangeCoins<N> => {
	const row = { required: 1, curr: 0 };
	let rows = 0;
	for (let i = 1; i <= n; i++) {
		row.curr++;
		if (row.curr === row.required) {
			row.curr = 0;
			row.required++;
			rows++;
		}
	}
	return rows as never;
};

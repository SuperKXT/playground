type TCheckCol<
	N extends number,
	M extends number,
	A extends number,
	B extends number,
	row extends Array<1>,
	count extends Array<1>,
	col extends Array<1> = [],
	idx extends Array<1> = [],
> = col["length"] extends N
	? TCheckRow<N, M, A, B, row, count>
	: [...idx, 1]["length"] extends A
		? TCheckCol<N, M, A, B, row, [...count, 1], [...col, 1]>
		: TCheckCol<N, M, A, B, row, count, [...col, 1], [...idx, 1]>;

type TCheckRow<
	N extends number,
	M extends number,
	A extends number,
	B extends number,
	row extends Array<1>,
	count extends Array<1>,
	idx extends Array<1> = [],
> = row["length"] extends M
	? count
	: [...idx, 1]["length"] extends B
		? TCheckCol<N, M, A, B, [...row, 1], count>
		: TCheckRow<N, M, A, B, [...row, 1], count, [...idx, 1]>;

type TCountRectangles<
	N extends number,
	M extends number,
	A extends number,
	B extends number,
> = TCheckRow<N, M, A, B, [], []>;

type TBigger<
	A extends Array<1>,
	B extends Array<1>,
> = A["length"] extends B["length"]
	? A["length"]
	: A[B["length"]] extends 1
		? A["length"]
		: B["length"];

type TPackRectangles<
	N extends number,
	M extends number,
	A extends number,
	B extends number,
> = TBigger<TCountRectangles<N, M, A, B>, TCountRectangles<N, M, B, A>>;

export const countRectangles = (
	n: number,
	m: number,
	a: number,
	b: number,
): number => {
	let count = 0;
	for (let j = 1; j + b - 1 <= m; j += b) {
		for (let i = 1; i + a - 1 <= n; i += a) {
			count++;
		}
	}
	return count;
};
export const packRectangles = <
	N extends number,
	M extends number,
	A extends number,
	B extends number,
>(
	n: N,
	m: M,
	a: A,
	b: B,
): TPackRectangles<N, M, A, B> => {
	return Math.max(
		countRectangles(n, m, a, b),
		countRectangles(n, m, b, a),
	) as never;
};

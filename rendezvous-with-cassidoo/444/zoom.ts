type TRepeat<
	T extends number,
	K extends number,
	res extends number[] = [],
> = res["length"] extends K ? res : TRepeat<T, K, [...res, T]>;

type TRepeatRow<Row extends number[], K extends number> = Row extends [
	infer first extends number,
	...infer rest extends number[],
]
	? [...TRepeat<first, K>, ...TRepeatRow<rest, K>]
	: [];

type TRepeatRowKTime<
	Row extends number[],
	K extends number,
	idx extends Array<1> = [],
> = idx["length"] extends K
	? []
	: [TRepeatRow<Row, K>, ...TRepeatRowKTime<Row, K, [...idx, 1]>];

type TZoom<Grid extends number[][], K extends number> = Grid extends [
	infer row extends number[],
	...infer rest extends number[][],
]
	? [...TRepeatRowKTime<row, K>, ...TZoom<rest, K>]
	: [];

export const zoom = <const Grid extends number[][], K extends number>(
	grid: Grid,
	k: K,
): TZoom<Grid, K> => {
	const res: number[][] = [];
	for (const row of grid) {
		for (let i = 0; i < k; i++) {
			const curr: number[] = [];
			for (const cell of row) {
				curr.push(...Array.from({ length: k }, () => cell));
			}
			res.push(curr);
		}
	}
	return res as never;
};

/* eslint-disable @typescript-eslint/no-non-null-assertion */

// https://leetcode.com/problems/shift-2d-grid

type _TShiftGrid<
	Grid extends number[][],
	Last extends number,
	resRow extends number[] = [],
> = Grid extends [
	infer row extends number[],
	...infer restRows extends number[][],
]
	? row extends [infer first extends number, ...infer rest extends number[]]
		? _TShiftGrid<[rest, ...restRows], first, [...resRow, Last]>
		: [resRow, ..._TShiftGrid<restRows, Last>]
	: [];

type TShiftGrid<
	Grid extends number[][],
	K extends number,
	idx extends Array<1> = [],
> = idx["length"] extends K
	? Grid
	: Grid extends [...unknown[], [...unknown[], infer last extends number]]
		? TShiftGrid<_TShiftGrid<Grid, last>, K, [...idx, 1]>
		: [];

export const shiftGrid = <const Grid extends number[][], K extends number>(
	grid: Grid,
	k: K,
): TShiftGrid<Grid, K> => {
	for (let i = 0; i < k; i++) {
		let last = grid.at(-1)!.at(-1)!;
		for (const row of grid) {
			for (let x = 0; x < row.length; x++) {
				const curr = row[x]!;
				row[x] = last;
				last = curr;
			}
		}
	}
	return grid as never;
};

// https://leetcode.com/problems/island-perimeter

type TRemoveOne<Arr extends unknown[]> = Arr extends [unknown, ...infer rest]
	? rest["length"]
	: 0;

type TPerimeter<
	Grid extends number[][],
	X extends Array<1> = [],
	Y extends Array<1> = [],
	Res extends Array<1> = [],
	options extends Array<[number, number]> = [
		[X extends [] ? -1 : TRemoveOne<X>, Y["length"]],
		[[...X, 1]["length"], Y["length"]],
		[X["length"], Y extends [] ? -1 : TRemoveOne<Y>],
		[X["length"], [...Y, 1]["length"]],
	],
> = options extends [
	infer first extends [number, number],
	...infer rest extends Array<[number, number]>,
]
	? TPerimeter<
			Grid,
			X,
			Y,
			-1 extends first[number]
				? [...Res, 1]
				: Grid[first[0]][first[1]] extends 1
					? Res
					: [...Res, 1],
			rest
		>
	: Res;

type _TIslandPerimeter<
	Grid extends number[][],
	Cols extends number,
	x extends Array<1> = [],
	y extends Array<1> = [],
	res extends Array<1> = [],
> = y["length"] extends Cols
	? x["length"] extends Grid["length"]
		? res["length"]
		: _TIslandPerimeter<Grid, Cols, [...x, 1], [], res>
	: _TIslandPerimeter<
			Grid,
			Cols,
			x,
			[...y, 1],
			Grid[x["length"]][y["length"]] extends 1
				? TPerimeter<Grid, x, y, res>
				: res
		>;

type TIslandPerimeter<Grid extends number[][]> =
	Grid[0]["length"] extends infer Cols extends number
		? _TIslandPerimeter<Grid, Cols>
		: 0;

export const islandPerimeter = <const Grid extends number[][]>(
	grid: Grid,
): TIslandPerimeter<Grid> => {
	let res = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < (grid[0] as number[]).length; j++) {
			if (grid[i]?.[j] === 0) continue;
			if (grid[i - 1]?.[j] !== 1) res += 1;
			if (grid[i + 1]?.[j] !== 1) res += 1;
			if (grid[i]?.[j - 1] !== 1) res += 1;
			if (grid[i]?.[j + 1] !== 1) res += 1;
		}
	}
	return res as never;
};

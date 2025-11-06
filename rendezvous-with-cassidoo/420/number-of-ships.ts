type TCell = "." | "X";

type TShift<Tup extends unknown[]> = Tup extends [unknown, ...infer rest]
	? rest
	: never;

type TNumberOfShips<
	Grid extends readonly TCell[][],
	x extends Array<1> = [],
	y extends Array<1> = [],
	ships extends Array<1> = [],
	cell extends TCell = Grid[x["length"]][y["length"]],
	prevRow extends TCell = x extends []
		? "."
		: Grid[TShift<x>["length"]][y["length"]],
	prevCol extends TCell = y extends []
		? "."
		: Grid[x["length"]][TShift<y>["length"]],
	nextCol extends TCell = Grid[x["length"]][[...y, 1]["length"]],
> = cell extends TCell
	? TNumberOfShips<
			Grid,
			nextCol extends TCell ? x : [...x, 1],
			nextCol extends TCell ? [...y, 1] : [],
			[cell, prevRow, prevCol] extends ["X", ".", "."] ? [...ships, 1] : ships
		>
	: ships["length"];

export const numberOfShips = <const Grid extends readonly TCell[][]>(
	grid: Grid,
): TNumberOfShips<Grid> => {
	let ships: number = 0;
	for (let x = 0; x < grid.length; x++) {
		const row = grid[x] as TCell[];
		for (let y = 0; y < row.length; y++) {
			const cell = row[y] as TCell;
			if (cell === "X") {
				if (grid[x - 1]?.[y] !== "X" && grid[x]?.[y - 1] !== "X") ships++;
			}
		}
	}
	return ships as never;
};

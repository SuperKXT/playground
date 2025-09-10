// https://leetcode.com/problems/valid-sudoku

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
const digitSet = new Set(digits);
type TDigit = (typeof digits)[number];

type TSudokuCell = TDigit | ".";

type TGridKey<idx extends 1[]> = idx[5] extends 1
	? 3
	: idx[2] extends 1
		? 2
		: 1;

type THasDuplicates<
	Sets extends Record<string, TSudokuCell>,
	Key extends string,
	Val extends TSudokuCell,
> = Key extends Key
	? Key extends keyof Sets
		? Val extends Sets[Key]
			? true
			: never
		: never
	: never;

type TGetVal<
	Sets extends Record<string, TSudokuCell>,
	Key extends string,
> = Key extends keyof Sets ? Sets[Key] : never;

type TIsValidSudoku<
	Board extends TSudokuCell[][],
	x extends 1[] = [],
	y extends 1[] = [],
	sets extends Record<string, TSudokuCell> = {},
	xKey extends string = `row-${x["length"]}`,
	yKey extends string = `col-${y["length"]}`,
	gridKey extends string = `grid-${TGridKey<x>}-${TGridKey<y>}`,
> = Board[x["length"]][y["length"]] extends infer val extends TSudokuCell
	? [val, true] extends [
			TDigit,
			THasDuplicates<sets, xKey | yKey | gridKey, val>,
		]
		? false
		: [x["length"], y["length"]] extends [8, 8]
			? true
			: TIsValidSudoku<
					Board,
					y["length"] extends 8 ? [...x, 1] : x,
					y["length"] extends 8 ? [] : [...y, 1],
					Omit<sets, xKey | yKey | gridKey> &
						Record<xKey, TGetVal<sets, xKey> | val> &
						Record<yKey, TGetVal<sets, yKey> | val> &
						Record<gridKey, TGetVal<sets, gridKey> | val>
				>
	: false;

export const isValidSudoku = <const Board extends TSudokuCell[][]>(
	board: Board,
): TIsValidSudoku<Board> => {
	const sets = new Map<string, Set<TSudokuCell>>();
	for (let x = 0; x < 9; x++) {
		for (let y = 0; y < 9; y++) {
			const cell = board[x]?.[y] as TSudokuCell;

			const rowKey = `row-${x}`;
			let row = sets.get(rowKey);
			if (!row) {
				row = new Set();
				sets.set(rowKey, row);
			}

			const colKey = `col-${y}`;
			let col = sets.get(colKey);
			if (!col) {
				col = new Set();
				sets.set(colKey, col);
			}

			const gridKey = `grid-${Math.floor(x / 3)}-${Math.floor(y / 3)}`;
			let grid = sets.get(gridKey);
			if (!grid) {
				grid = new Set();
				sets.set(gridKey, grid);
			}
			if (cell === ".") continue;
			if (!digitSet.has(cell as never)) return false as never;
			if (row.has(cell) || col.has(cell) || grid.has(cell))
				return false as never;
			row.add(cell);
			col.add(cell);
			grid.add(cell);
		}
	}
	return true as never;
};

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
const digitSet = new Set(digits);
type TDigit = (typeof digits)[number];

type TSudokuCell = TDigit | ".";

export const containsDuplicate = (board: TSudokuCell[][]): boolean => {
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
			if (!digitSet.has(cell as never)) return false;
			if (row.has(cell) || col.has(cell) || grid.has(cell)) return false;
			row.add(cell);
			col.add(cell);
			grid.add(cell);
		}
	}
	return true;
};

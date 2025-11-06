export const knightMoves = (pos: [number, number]): Array<[number, number]> => {
	const [row, col] = pos;
	const res: Array<[row: number, col: number]> = [];
	if (col > 0) {
		if (row < 6) res.push([row + 2, col - 1]);
		if (row > 1) res.push([row - 2, col - 1]);
	}
	if (col < 7) {
		if (row < 6) res.push([row + 2, col + 1]);
		if (row > 1) res.push([row - 2, col + 1]);
	}
	if (row < 7) {
		if (col < 6) res.push([row + 1, col + 2]);
		if (col > 1) res.push([row + 1, col - 2]);
	}
	if (row > 0) {
		if (col < 6) res.push([row - 1, col + 2]);
		if (col > 1) res.push([row - 1, col - 2]);
	}
	return res.sort((a, b) => a[0] - b[0] || a[1] - b[1]) as never;
};

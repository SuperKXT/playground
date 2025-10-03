// https://leetcode.com/problems/reshape-the-matrix

// export const reshapeMatrix = (
// 	matrix: number[][],
// 	rows: number,
// 	columns: number,
// ): number[][] => {
// 	if (rows * columns !== matrix.length * (matrix[0]?.length ?? 0))
// 		return matrix;
// 	const toAdd = matrix.map((r) => [...r]);
// 	const reshaped: number[][] = [];
// 	for (let r = 0; r < rows; r++) {
// 		const row: number[] = [];
// 		reshaped.push(row);
// 		for (let c = 0; c < columns; c++) {
// 			const curr = toAdd[0]?.shift() as number;
// 			row.push(curr);
// 			if (!toAdd[0]?.length) toAdd.shift();
// 		}
// 	}
// 	return reshaped;
// };

export const reshapeMatrix = (
	matrix: number[][],
	rows: number,
	columns: number,
): number[][] => {
	if (rows * columns !== matrix.length * (matrix[0]?.length ?? 0))
		return matrix;
	const toAdd = { row: 0, col: 0 };
	const reshaped: number[][] = [];
	for (let r = 0; r < rows; r++) {
		const row: number[] = [];
		reshaped.push(row);

		for (let c = 0; c < columns; c++) {
			const toAddRow = matrix[toAdd.row] as number[];
			const curr = toAddRow[toAdd.col] as number;
			row.push(curr);
			toAdd.col++;
			if (toAddRow[toAdd.col] === undefined) {
				toAdd.row++;
				toAdd.col = 0;
			}
		}
	}
	return reshaped;
};

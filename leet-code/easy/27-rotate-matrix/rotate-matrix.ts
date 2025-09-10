export const rotateMatrix = (matrix: number[][]): void => {
	const rows = matrix.length;
	const cols = matrix[0]?.length ?? 0;
	for (let colIdx = 0; colIdx < cols; colIdx++) {
		const col: number[] = [];
		for (let rowIdx = rows - 1; rowIdx >= 0; rowIdx--) {
			col.push(matrix[rowIdx]?.[colIdx] as number);
		}
		matrix.push(col);
	}
	matrix.splice(0, rows);
};

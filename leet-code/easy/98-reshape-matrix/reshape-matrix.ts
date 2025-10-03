// https://leetcode.com/problems/reshape-the-matrix

type TReshapeMatrix<
	Original extends number[][],
	Rows extends number,
	Columns extends number,
	Matrix extends number[][] = Original,
	res extends number[][] = [],
	row extends number[] = [],
> = Matrix extends [
	infer matrixRow extends number[],
	...infer restRow extends number[][],
]
	? matrixRow extends [
			infer curr extends number,
			...infer restCol extends number[],
		]
		? TReshapeMatrix<
				Original,
				Rows,
				Columns,
				[restCol, ...restRow],
				row["length"] extends Columns ? [...res, row] : res,
				row["length"] extends Columns ? [curr] : [...row, curr]
			>
		: TReshapeMatrix<Original, Rows, Columns, restRow, res, row>
	: row["length"] extends Columns
		? [...res, row]["length"] extends Rows
			? [...res, row]
			: Original
		: Original;

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

export const reshapeMatrix = <
	const Matrix extends number[][],
	Rows extends number,
	Columns extends number,
>(
	matrix: Matrix,
	rows: Rows,
	columns: Columns,
): TReshapeMatrix<Matrix, Rows, Columns> => {
	if (rows * columns !== matrix.length * (matrix[0]?.length ?? 0))
		return matrix as never;
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
	return reshaped as never;
};

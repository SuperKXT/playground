// https://leetcode.com/problems/range-addition-ii

// ! Too slow
// export const rangeAddition = (
// 	m: number,
// 	n: number,
// 	ops: [number, number][],
// ): number => {
// 	const matrix = Array.from({ length: m }, () =>
// 		Array.from({ length: n }, () => 0),
// 	);
// 	const curr = { val: 0, count: m * n };
// 	for (const op of ops) {
// 		for (let i = 0; i < op[0]; i++) {
// 			const row = matrix[i] as number[];
// 			for (let j = 0; j < op[1]; j++) {
// 				const val = (row[j] as number) + 1;
// 				if (curr.val < val) {
// 					curr.val = val;
// 					curr.count = 1;
// 				} else if (curr.val === val) {
// 					curr.count++;
// 				}
// 				row[j] = val;
// 			}
// 		}
// 	}
// 	return curr.count;
// };

export const rangeAddition = (
	m: number,
	n: number,
	ops: [number, number][],
): number => {
	const curr = [m, n] as [number, number];
	for (const op of ops) {
		if (curr[0] > op[0]) curr[0] = op[0];
		if (curr[1] > op[1]) curr[1] = op[1];
	}
	return curr[0] * curr[1];
};

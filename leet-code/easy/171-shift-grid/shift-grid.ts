/* eslint-disable @typescript-eslint/no-non-null-assertion */

// https://leetcode.com/problems/shift-2d-grid

export const shiftGrid = (grid: number[][], k: number): number[][] => {
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
	return grid;
};

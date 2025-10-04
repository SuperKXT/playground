// https://leetcode.com/problems/island-perimeter

export const islandPerimeter = (grid: number[][]): number => {
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
	return res;
};

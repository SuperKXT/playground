// const getDistance = (a: [number, number], b: [number, number]): number => {
// 	return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
// };

// export const fireStationCoverage = (grid: number[][]): number[][] => {
// 	const res: number[][] = [];
// 	const fireStations = new Set<[number, number]>();
// 	const notFireStations = new Set<[number, number]>();
// 	for (let i = 0; i < grid.length; i++) {
// 		const row: number[] = [];
// 		res.push(row);
// 		for (let j = 0; j < grid[i]!.length; j++) {
// 			const curr = grid[i]![j] as number;
// 			if (curr === 1) {
// 				fireStations.add([i, j]);
// 				row.push(0);
// 			} else {
// 				notFireStations.add([i, j]);
// 				row.push(Infinity);
// 			}
// 		}
// 	}
// 	for (const i of notFireStations) {
// 		let minDist = Infinity;
// 		for (const f of fireStations) {
// 			const distance = getDistance(i, f);
// 			if (distance < minDist) minDist = distance;
// 		}
// 		if (minDist) res[i[0]]![i[1]] = minDist;
// 	}
// 	return res;
// };

const closest = (grid: number[][], x: number, y: number): number => {
	const curr = grid[x]?.[y] ?? 0;
	if (curr === 1) return 0;
	const length = Math.max(
		x,
		y,
		grid.length - x - 1,
		(grid[0]?.length ?? 0) - y - 1,
	);
	for (let i = 1; i <= length; i++) {
		const up = grid[x - i]?.[y] ?? 0;
		const down = grid[x + i]?.[y] ?? 0;
		const left = grid[x]?.[y - i] ?? 0;
		const right = grid[x]?.[y + i] ?? 0;
		const upLeft = grid[x - i]?.[y - i] ?? 0;
		const downLeft = grid[x + i]?.[y - i] ?? 0;
		const upRight = grid[x - i]?.[y + i] ?? 0;
		const downRight = grid[x + i]?.[y + i] ?? 0;
		if (up === 1 || down === 1 || left === 1 || right === 1) {
			return i;
		}
		if (upLeft === 1 || downLeft === 1 || upRight === 1 || downRight === 1) {
			return i + 1;
		}
	}
	return -1;
};

export const fireStationCoverage = (grid: number[][]): number[][] => {
	const res: number[][] = [];
	for (let i = 0; i < grid.length; i++) {
		const curr: number[] = [];
		res.push(curr);
		for (let j = 0; j < (grid[i]?.length ?? 0); j++) {
			curr.push(closest(grid, i, j));
		}
	}
	return res;
};

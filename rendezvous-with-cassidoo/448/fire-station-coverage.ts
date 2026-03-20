/* eslint-disable @typescript-eslint/no-non-null-assertion */

const getDistance = (a: [number, number], b: [number, number]): number => {
	return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};

export const fireStationCoverage = (grid: number[][]): number[][] => {
	const res: number[][] = [];
	const fireStations = new Set<[number, number]>();
	const notFireStations = new Set<[number, number]>();
	for (let i = 0; i < grid.length; i++) {
		const row: number[] = [];
		res.push(row);
		for (let j = 0; j < grid[i]!.length; j++) {
			const curr = grid[i]![j] as number;
			if (curr === 1) {
				fireStations.add([i, j]);
				row.push(0);
			} else {
				notFireStations.add([i, j]);
				row.push(Infinity);
			}
		}
	}
	for (const i of notFireStations) {
		let minDist = Infinity;
		for (const f of fireStations) {
			const distance = getDistance(i, f);
			if (distance < minDist) minDist = distance;
		}
		if (minDist) res[i[0]]![i[1]] = minDist;
	}
	return res;
};

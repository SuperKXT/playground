export const minutesUntilApocalypse = (grid: number[][]): number => {
	const seen = new Set<string>();
	let zombies: Array<[number, number]> = [];
	let people = 0;
	for (const [i, row] of grid.entries()) {
		for (const [j, cell] of row.entries()) {
			if (cell === 2) zombies.push([i, j]);
			else if (cell === 1) people++;
		}
	}

	let minutes = 0;
	while (people > 0 && zombies.length > 0) {
		const next: Array<[number, number]> = [];
		for (const [x, y] of zombies) {
			const sides: Array<[number, number]> = [
				[x, y + 1],
				[x, y - 1],
				[x + 1, y],
				[x - 1, y],
			];
			for (const pos of sides) {
				const key = pos.join("-");
				if (grid[pos[0]]?.[pos[1]] !== 1 || seen.has(key)) continue;
				seen.add(key);
				people--;
				next.push(pos);
			}
		}
		zombies = next;
		minutes++;
	}
	return people === 0 ? minutes : -1;
};

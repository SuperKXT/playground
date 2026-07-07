export const fireworkBlast = (
	n: number,
	m: number,
	size: number,
	row: number,
	col: number,
): Array<[number, number]> => {
	const res: Array<[number, number]> = [];
	const radius = Math.floor(size / 2);
	for (let x = 0; x < n; x++) {
		for (let y = 0; y < m; y++) {
			const inBlast =
				Math.abs(x - row) <= radius && Math.abs(y - col) <= radius;
			if (inBlast) res.push([x, y]);
		}
	}
	return res;
};

export const firstFrost = (temps: number[], drop: number): number[] => {
	const res: number[] = [];
	for (let x = 0; x < temps.length; x++) {
		const temp = temps[x] as number;
		for (let y = x + 1; y < temps.length; y++) {
			const curr = temps[y] as number;
			if (temp - curr < drop) continue;
			res[x] = y - x;
			break;
		}
		res[x] ??= 0;
	}
	return res;
};

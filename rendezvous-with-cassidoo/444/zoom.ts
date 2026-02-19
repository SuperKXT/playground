export const zoom = (grid: number[][], k: number): number[][] => {
	const res: number[][] = [];
	for (const row of grid) {
		for (let i = 0; i < k; i++) {
			const curr: number[] = [];
			for (const cell of row) {
				curr.push(...Array.from({ length: k }, () => cell));
			}
			res.push(curr);
		}
	}
	return res;
};

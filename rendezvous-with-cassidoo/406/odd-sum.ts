export const oddSum = (a: number[], b: number[]): [number, number][] => {
	const pairs: [number, number][] = [];
	for (const x of a) {
		for (const y of b) {
			if ((x + y) % 2 !== 0) pairs.push([x, y]);
		}
	}
	return pairs;
};

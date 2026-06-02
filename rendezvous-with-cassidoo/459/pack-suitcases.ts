export const packSuitcases = (objects: number[], cases: number[]): number => {
	const sortedObjs = objects.toSorted((a, b) => b - a);
	const sortedCases = cases.toSorted((a, b) => b - a);
	let count = 0;
	for (const c of sortedCases) {
		count++;
		let remaining = c;
		for (let i = 0; i < sortedObjs.length; i++) {
			const o = sortedObjs[i] as number;
			if (o > c) {
				return -1;
			}
			if (o <= remaining) {
				sortedObjs.splice(i, 1);
				i--;
				remaining -= o;
			}
		}
		if (sortedObjs.length === 0) return count;
	}
	return -1;
};

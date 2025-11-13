export const mergeArrays = (a: number[], b: number[]): void => {
	const bSize = b.length;
	const aSize = a.length;
	let i = 0;
	for (; i < aSize - bSize + 1; i++) {
		const num = a[i] as number;
		const toAdd = b[0];
		if (toAdd === undefined) break;
		if (num > toAdd) {
			a.splice(i, 0, toAdd);
			b.splice(0, 1);
		}
	}
	a.splice(i + 1, Infinity, ...b);
};

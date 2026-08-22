export const countRectangles = (
	n: number,
	m: number,
	a: number,
	b: number,
): number => {
	let count = 0;
	for (let j = 1; j + b - 1 <= m; j += b) {
		for (let i = 1; i + a - 1 <= n; i += a) {
			count++;
		}
	}
	return count;
};
export const packRectangles = (
	n: number,
	m: number,
	a: number,
	b: number,
): number => {
	return Math.max(countRectangles(n, m, a, b), countRectangles(n, m, b, a));
};

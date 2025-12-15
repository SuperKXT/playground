export const latinSquare = (n: number): number[][] => {
	const arr = Array.from({ length: n }, (_, i) => i + 1);
	const res: number[][] = [];
	for (let i = 0; i < n; i++) {
		res.push(Array.from(arr));
		arr.splice(arr.length, 0, ...arr.splice(0, 1));
	}
	return res;
};

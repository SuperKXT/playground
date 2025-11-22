export const repeatedIntegers = (n: number): number[] => {
	const res: number[] = [];
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			res.push(i);
		}
	}
	return res;
};

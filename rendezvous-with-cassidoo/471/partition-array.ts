export const partitionArray = (arr: number[]): number[] => {
	const odd: number[] = [];
	const even: number[] = [];
	const zero: number[] = [];
	for (const num of arr) {
		if (num === 0) zero.push(num);
		else if (num % 2 === 0) even.push(num);
		else odd.push(num);
	}
	return [...odd, ...even, ...zero];
};

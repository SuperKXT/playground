export const nestArray = (arr: number[]): unknown[] => {
	const res: unknown[] = [];
	const [first, ...rest] = arr;
	res.push(first);
	let curr = res;
	for (const item of rest) {
		const newCurr = [item];
		curr.push(newCurr);
		curr = newCurr;
	}
	return res as never;
};

export type TNestArray<Arr extends number[]> = Arr extends [
	infer first,
	...infer rest extends number[],
]
	? rest extends []
		? [first]
		: [first, TNestArray<rest>]
	: never;

export const nestArray = <const Arr extends number[]>(
	arr: Arr,
): TNestArray<Arr> => {
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

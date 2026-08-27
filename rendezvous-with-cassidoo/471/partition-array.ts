type TIsEven<T extends number> = `${T}` extends `${string}${0 | 2 | 4 | 6 | 8}`
	? true
	: false;

type TPartitionArray<
	Arr extends number[],
	odd extends number[] = [],
	even extends number[] = [],
	zero extends number[] = [],
> = Arr extends [infer num extends number, ...infer res extends number[]]
	? num extends 0
		? TPartitionArray<res, odd, even, [...zero, num]>
		: TIsEven<num> extends true
			? TPartitionArray<res, odd, [...even, num], zero>
			: TPartitionArray<res, [...odd, num], even, zero>
	: [...odd, ...even, ...zero];

export const partitionArray = <const Arr extends number[]>(
	arr: Arr,
): TPartitionArray<Arr> => {
	const odd: number[] = [];
	const even: number[] = [];
	const zero: number[] = [];
	for (const num of arr) {
		if (num === 0) zero.push(num);
		else if (num % 2 === 0) even.push(num);
		else odd.push(num);
	}
	return [...odd, ...even, ...zero] as never;
};

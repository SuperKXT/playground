export type TRemoveDuplicates<
	Arr extends readonly unknown[],
	prev = -1,
	count extends 1[] = [],
> = Arr extends readonly [infer first, ...infer rest]
	? TRemoveDuplicates<rest, first, first extends prev ? count : [...count, 1]>
	: count["length"];

export const removeDuplicates = <const Arr extends readonly unknown[]>(
	arr: Arr,
): TRemoveDuplicates<Arr> => {
	let curr: undefined | Arr[number] = undefined;
	let count = 0;
	for (const num of arr) {
		if (curr !== num) count++;
		curr = num;
	}
	return count as never;
};

export type TRemoveDuplicates<
	Arr extends readonly unknown[],
	res extends unknown[] = [],
> = Arr extends readonly [infer first, ...infer rest]
	? TRemoveDuplicates<rest, first extends res[number] ? res : [...res, first]>
	: res["length"];

export const removeDuplicates = <const Arr extends readonly unknown[]>(
	arr: Arr,
): TRemoveDuplicates<Arr> => {
	const set = new Set<unknown>();
	for (let idx = 0; idx < arr.length; idx++) {
		const num = arr[idx] as number;
		if (set.has(num)) {
			(arr as unknown as unknown[]).splice(idx, 1);
			idx--;
		} else {
			set.add(num);
		}
	}
	return arr.length as never;
};

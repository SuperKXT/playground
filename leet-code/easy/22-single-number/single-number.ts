type TSingleNumber<
	Nums extends number[],
	counts extends { val: number; count: 0 | 1 } = never,
> = Nums extends [infer first extends number, ...infer rest extends number[]]
	? TSingleNumber<
			rest,
			| Exclude<counts, { val: first }>
			| {
					val: first;
					count: Extract<counts, { val: first }> extends never ? 0 : 1;
			  }
		>
	: Extract<counts, { count: 0 }>["val"] extends infer res
		? [res] extends [never]
			? null
			: res
		: null;

export const singleNumber = <const Nums extends number[]>(
	nums: Nums,
): TSingleNumber<Nums> => {
	const set = new Set<number>();
	for (const num of nums) {
		if (set.has(num)) set.delete(num);
		else set.add(num);
	}
	return (set.values().next().value ?? null) as never;
};

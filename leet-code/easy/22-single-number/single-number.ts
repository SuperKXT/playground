type TSingleNumber<
	Nums extends number[],
	visited extends number = never,
> = Nums extends [infer first extends number, ...infer rest extends number[]]
	? first extends visited
		? TSingleNumber<rest, visited | first>
		: first extends rest[number]
			? TSingleNumber<rest, visited | first>
			: first
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

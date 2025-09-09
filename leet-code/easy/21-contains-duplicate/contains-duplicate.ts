type TContainsDuplicate<Nums extends unknown[]> = Nums extends [
	infer first,
	...infer rest,
]
	? first extends rest[number]
		? true
		: TContainsDuplicate<rest>
	: false;

// export const containsDuplicate = <Nums extends unknown[]>(
// 	nums: number[],
// ): TContainsDuplicate<Nums> => {
// 	return (new Set(nums).size !== nums.length) as never;
// };

export const containsDuplicate = <const Nums extends unknown[]>(
	nums: Nums,
): TContainsDuplicate<Nums> => {
	const set = new Set<Nums[number]>();
	for (const num of nums) {
		if (set.has(num)) return true as never;
		set.add(num);
	}
	return false as never;
};

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

type TDisappearedNumbers<
	Nums extends number[],
	idx extends 1[] = [],
	missing extends number[] = [],
	curr extends number = [...idx, 1]["length"],
> = idx["length"] extends Nums["length"]
	? missing
	: TDisappearedNumbers<
			Nums,
			[...idx, 1],
			curr extends Nums[number] ? missing : [...missing, curr]
		>;

// export const disappearedNumbers = <const Nums extends number[]>(
// 	nums: Nums,
// ): TDisappearedNumbers<Nums> => {
// 	const set = new Set<number>();
// 	for (let i = 1; i <= nums.length; i++) set.add(i);
// 	for (const num of nums) set.delete(num);
// 	return Array.from(set) as never;
// };

export const disappearedNumbers = <const Nums extends number[]>(
	nums: Nums,
): TDisappearedNumbers<Nums> => {
	const missing: number[] = [];
	for (const num of nums) {
		const idx = Math.abs(num) - 1;
		nums[idx] = -Math.abs(nums[idx] as number);
	}
	for (let idx = 1; idx <= nums.length; idx++) {
		if ((nums[idx - 1] as number) > 0) missing.push(idx);
	}
	return missing as never;
};

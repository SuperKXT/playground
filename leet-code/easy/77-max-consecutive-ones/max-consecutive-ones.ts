// https://leetcode.com/problems/max-consecutive-ones

type TMaxConsecutiveOnes<
	Nums extends number[],
	max extends Array<1> = [],
	curr extends Array<1> = [],
> = Nums extends [infer first, ...infer rest extends number[]]
	? first extends 1
		? TMaxConsecutiveOnes<
				rest,
				curr["length"] extends max["length"] ? [...max, 1] : max,
				[...curr, 1]
			>
		: TMaxConsecutiveOnes<rest, max>
	: max["length"];

export const maxConsecutiveOnes = <const Nums extends number[]>(
	nums: Nums,
): TMaxConsecutiveOnes<Nums> => {
	let max = 0;
	let curr = 0;
	for (const num of nums) {
		if (num === 1) curr++;
		else curr = 0;
		if (curr > max) max = curr;
	}
	return max as never;
};

// https://leetcode.com/problems/distribute-candies

type THalf<Arr extends unknown[], res extends 1[] = []> = Arr extends [
	unknown,
	unknown,
	...infer rest,
]
	? THalf<rest, [...res, 1]>
	: res["length"];

type TDistributeCandies<
	CandyType extends unknown[],
	max extends number = THalf<CandyType>,
	size extends 1[] = [],
	union = never,
> = size["length"] extends max
	? max
	: CandyType extends [infer first, ...infer rest]
		? first extends union
			? TDistributeCandies<rest, max, size, union>
			: TDistributeCandies<rest, max, [...size, 1], first | union>
		: size["length"];

export const distributeCandies = <const CandyType extends number[]>(
	candyType: CandyType,
): TDistributeCandies<CandyType> => {
	const max = candyType.length / 2;
	const set = new Set<number>();
	for (const type of candyType) {
		set.add(type);
		if (set.size === max) break;
	}
	return set.size as never;
};

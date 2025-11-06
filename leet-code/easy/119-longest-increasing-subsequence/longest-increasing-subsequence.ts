// https://leetcode.com/problems/longest-continuous-increasing-subsequence

type TTuple<
	size extends number,
	res extends unknown[] = [],
> = res["length"] extends size ? res : TTuple<size, [...res, 1]>;

type TNumberToTuple<
	Num extends number,
	str extends string = `${Num}`,
	tup extends number[] = [],
> = str extends `${"-" | "+"}${infer rest}`
	? TNumberToTuple<never, rest, tup>
	: str extends `${infer first extends number}${infer rest}`
		? TNumberToTuple<never, rest, [...tup, first]>
		: tup;

type TCompareDigits<
	digitA extends number,
	digitB extends number,
	tupA extends unknown[] = TTuple<digitA>,
	tupB extends unknown[] = TTuple<digitB>,
> = digitA extends digitB
	? "equal"
	: tupA[tupB["length"]] extends 1
		? "greater"
		: "lesser";

type _TCompareNumbers<
	tupA extends unknown[],
	tupB extends unknown[],
> = tupA["length"] extends tupB["length"]
	? [tupA, tupB] extends [
			[infer firstA extends number, ...infer restA],
			[infer firstB extends number, ...infer restB],
		]
		? TCompareDigits<firstA, firstB> extends infer res
			? res extends "equal"
				? _TCompareNumbers<restA, restB>
				: res
			: never
		: never
	: tupA[tupB["length"]] extends number
		? "greater"
		: "lesser";
type TCompareNumbers<
	numA extends number,
	numB extends number,
> = numA extends numB
	? "equal"
	: `${numA}` extends `-${string}`
		? `${numB}` extends `-${string}`
			? _TCompareNumbers<
					TNumberToTuple<numA>,
					TNumberToTuple<numB>
				> extends "greater"
				? "lesser"
				: "greater"
			: "lesser"
		: `${numB}` extends `-${string}`
			? "greater"
			: _TCompareNumbers<TNumberToTuple<numA>, TNumberToTuple<numB>>;

type _TLongestIncreasingSubsequence<
	Nums extends number[],
	last extends number,
	curr extends Array<1>,
	max extends Array<1> = [],
> = Nums extends [infer first extends number, ...infer rest extends number[]]
	? TCompareNumbers<last, first> extends "lesser"
		? _TLongestIncreasingSubsequence<rest, first, [...curr, 1], max>
		: _TLongestIncreasingSubsequence<
				rest,
				first,
				[1],
				curr[max["length"]] extends 1 ? curr : max
			>
	: curr[max["length"]] extends 1
		? curr["length"]
		: max["length"];

type TLongestIncreasingSubsequence<Nums extends number[]> = Nums extends [
	infer first extends number,
	...infer rest extends number[],
]
	? _TLongestIncreasingSubsequence<rest, first, [1]>
	: 0;

export const longestIncreasingSubsequence = <const Nums extends number[]>(
	nums: Nums,
): TLongestIncreasingSubsequence<Nums> => {
	let last: undefined | number;
	let curr = 0;
	let max = 0;
	for (const num of nums) {
		if (last !== undefined && last >= num) {
			max = Math.max(max, curr);
			curr = 1;
		} else {
			curr++;
		}
		last = num;
	}
	return Math.max(max, curr) as never;
};

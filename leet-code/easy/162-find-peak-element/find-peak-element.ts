// https://leetcode.com/problems/find-peak-element

/* eslint-disable @typescript-eslint/no-non-null-assertion */

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

type TFindPeakElement<
	Nums extends number[],
	idx extends Array<1> = [],
	prev extends number = never,
> = Nums extends [
	infer first extends number,
	infer next extends number,
	...infer rest extends number[],
]
	?
			| (
					| TCompareNumbers<first, prev>
					| TCompareNumbers<first, next> extends "greater"
					? idx["length"]
					: never)
			| TFindPeakElement<[next, ...rest], [...idx, 1], first>
	: Nums extends [infer first extends number, ...infer rest extends number[]]
		?
				| (TCompareNumbers<first, prev> extends "greater"
						? idx["length"]
						: never)
				| TFindPeakElement<rest, [...idx, 1], first>
		: never;

// export const findPeakElement = <const Nums extends number[]>(
// 	nums: Nums,
// ): TFindPeakElement<Nums> => {
// 	for (let i = 0; i < nums.length; i++) {
// 		if (
// 			nums[i]! > (nums[i - 1] ?? -Infinity) &&
// 			nums[i]! > (nums[i + 1] ?? -Infinity)
// 		)
// 			return i as never;
// 	}
// 	return -1 as never;
// };

export const findPeakElement = <const Nums extends number[]>(
	nums: Nums,
): TFindPeakElement<Nums> => {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor((right + left) / 2);
		const leftVal = nums[mid - 1] ?? -Infinity;
		const rightVal = nums[mid + 1] ?? -Infinity;
		if (nums[mid]! > leftVal && nums[mid]! > rightVal) {
			return mid as never;
		}
		if (leftVal > rightVal) right = mid - 1;
		else left = mid + 1;
	}
	return -1 as never;
};

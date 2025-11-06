// https://leetcode.com/problems/search-insert-position

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

type TInsertPosition<
	nums extends number[],
	target extends number,
	idx extends Array<1> = [],
> = nums extends [infer first extends number, ...infer rest extends number[]]
	? TCompareNumbers<target, first> extends "greater"
		? TInsertPosition<rest, target, [...idx, 1]>
		: idx["length"]
	: idx["length"];

// export const insertPosition = <
// 	const Nums extends number[],
// 	Target extends number,
// >(
// 	nums: Nums,
// 	target: Target,
// ): TInsertPosition<Nums, Target> => {
// 	for (let idx = 0; idx < nums.length; idx++) {
// 		const curr = nums[idx] as number;
// 		if (curr >= target) return idx as never;
// 	}
// 	return nums.length as never;
// };

export const insertPosition = <
	const Nums extends number[],
	Target extends number,
>(
	nums: Nums,
	target: Target,
): TInsertPosition<Nums, Target> => {
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		const curr = nums[mid] as number;
		if (target === curr) return mid as never;
		if (target > curr) start = mid + 1;
		else end = mid - 1;
	}
	return start as never;
};

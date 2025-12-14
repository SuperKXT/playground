// https://leetcode.com/problems/monotonic-array

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

type TMonotonicArray<
	Nums extends number[],
	last extends null | number = null,
	direction extends "asc" | "desc" | null = null,
> = Nums extends [infer num extends number, ...infer rest extends number[]]
	? last extends number
		? direction extends null
			? num extends last
				? TMonotonicArray<rest, num>
				: TMonotonicArray<
						rest,
						num,
						TCompareNumbers<num, last> extends "greater" ? "asc" : "desc"
					>
			: TCompareNumbers<num, last> extends (
						direction extends "asc" ? "lesser" : "greater"
				  )
				? false
				: TMonotonicArray<rest, num, direction>
		: TMonotonicArray<rest, num>
	: true;

export const monotonicArray = <const Nums extends number[]>(
	nums: Nums,
): TMonotonicArray<Nums> => {
	let last: null | number = null;
	let direction: null | "asc" | "desc" = null;
	for (const num of nums) {
		if (last === null) {
			last = num;
			continue;
		}
		if (direction === null) {
			if (num !== last) direction = num > last ? "asc" : "desc";
			last = num;
			continue;
		}
		if (direction === "asc" ? num < last : last < num) return false as never;
		last = num;
	}
	return true as never;
};

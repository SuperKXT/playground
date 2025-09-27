// https://leetcode.com/problems/third-maximum-number

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

type TGreaterThan<
	Num extends number,
	ToCheck extends number | undefined,
> = ToCheck extends number
	? TCompareNumbers<Num, ToCheck> extends "greater"
		? true
		: false
	: true;

type TThirdMaxNumber<
	Nums extends number[],
	first extends number | undefined = undefined,
	second extends number | undefined = undefined,
	third extends number | undefined = undefined,
> = Nums extends [infer curr extends number, ...infer rest extends number[]]
	? curr extends first | second | third
		? TThirdMaxNumber<rest, first, second, third>
		: TGreaterThan<curr, first> extends true
			? TThirdMaxNumber<rest, curr, first, second>
			: TGreaterThan<curr, second> extends true
				? TThirdMaxNumber<rest, first, curr, second>
				: TThirdMaxNumber<
						rest,
						first,
						second,
						TGreaterThan<curr, third> extends true ? curr : third
					>
	: third extends undefined
		? first
		: third;

// export const thirdMaxNumber = <const Nums extends number[]>(
// 	n: Nums,
// ): TThirdMaxNumber<Nums> => {
// 	const sorted = Array.from(new Set(n.sort((a, b) => a - b)));
// 	const res = sorted.at(-3) ?? sorted.at(-1);
// 	if (res === undefined) throw new Error("Number not found!");
// 	return res as never;
// };

// export const thirdMaxNumber = <const Nums extends number[]>(
// 	nums: Nums,
// ): TThirdMaxNumber<Nums> => {
// 	let first = -Infinity;
// 	let second = -Infinity;
// 	let third = -Infinity;
// 	const set = new Set<number>();
// 	for (const num of nums) {
// 		if (set.has(num)) continue;
// 		set.add(num);
// 		if (num > first) {
// 			third = second;
// 			second = first;
// 			first = num;
// 		} else if (num > second) {
// 			third = second;
// 			second = num;
// 		} else if (num > third) {
// 			third = num;
// 		}
// 	}
// 	return (Number.isFinite(third) ? third : first) as never;
// };

export const thirdMaxNumber = <const Nums extends number[]>(
	nums: Nums,
): TThirdMaxNumber<Nums> => {
	let first = -Infinity;
	let second = -Infinity;
	let third = -Infinity;
	for (const num of nums) {
		if (num === first || num === second || num === third) continue;
		if (num > first) {
			third = second;
			second = first;
			first = num;
		} else if (num > second) {
			third = second;
			second = num;
		} else if (num > third) {
			third = num;
		}
	}
	return (Number.isFinite(third) ? third : first) as never;
};

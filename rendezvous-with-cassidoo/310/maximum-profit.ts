type TTuple<
	T extends number,
	result extends 1[] = [],
> = result["length"] extends T ? result : TTuple<T, [...result, 1]>;

type TDigit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

type TNumberToTuple<
	T extends number,
	str extends string = `${T}`,
> = str extends `${infer first extends TDigit}${infer rest}`
	? [first, ...TNumberToTuple<never, rest>]
	: str extends `${infer first extends TDigit}`
		? [first]
		: [];

type TCompareDigit<T extends TDigit, U extends TDigit> = T extends U
	? "equal"
	: TTuple<U> extends [...TTuple<T>, ...unknown[]]
		? "less"
		: "greater";

type TCompareNumInner<tTuple extends TDigit[], uTuple extends TDigit[]> = [
	tTuple,
	uTuple,
] extends [
	[infer tFirst extends TDigit, ...infer tRest extends TDigit[]],
	[infer uFirst extends TDigit, ...infer uRest extends TDigit[]],
]
	? TCompareDigit<tFirst, uFirst> extends "less"
		? "less"
		: TCompareDigit<tFirst, uFirst> extends "greater"
			? "greater"
			: TCompareNumInner<tRest, uRest>
	: "equal";

type TCompareNum<
	T extends number,
	U extends number,
	tTuple extends TDigit[] = TNumberToTuple<T>,
	uTuple extends TDigit[] = TNumberToTuple<U>,
> = T extends U
	? "equal"
	: tTuple[uTuple["length"]] extends TDigit
		? "greater"
		: uTuple[tTuple["length"]] extends TDigit
			? "less"
			: TCompareNumInner<tTuple, uTuple>;

type TMin<
	T extends readonly number[],
	val extends number = never,
> = T extends readonly [
	infer first extends number,
	...infer rest extends number[],
]
	? TMin<
			rest,
			[val] extends [never]
				? first
				: TCompareNum<first, val> extends "less"
					? first
					: val
		>
	: [val] extends [never]
		? 0
		: val;

type TMax<
	T extends readonly number[],
	val extends number = never,
> = T extends readonly [
	infer first extends number,
	...infer rest extends number[],
]
	? TMax<
			rest,
			[val] extends [never]
				? first
				: TCompareNum<first, val> extends "greater"
					? first
					: val
		>
	: [val] extends [never]
		? 0
		: val;

type TSubtract<T extends number, U extends number> =
	TTuple<T> extends [...TTuple<U>, ...infer rest] ? rest["length"] : never;

type TMaximumProfit<
	Arr extends readonly number[],
	minVal extends number = TMin<Arr>,
> = Arr extends readonly [
	infer first extends number,
	...infer rest extends number[],
]
	? first extends minVal
		? TCompareNum<minVal, TMax<rest>> extends "less"
			? TSubtract<TMax<rest>, minVal>
			: 0
		: TMaximumProfit<rest, minVal>
	: minVal;

export const maximumProfit = <const arr extends readonly number[]>(
	array: arr,
): TMaximumProfit<arr> => {
	const min = Math.min(...array, 0);
	const max = Math.max(...array.slice(array.indexOf(min)), 0);
	return (max - min) as never;
};

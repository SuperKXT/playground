const minSize = -(2 ** 31);
const maxSize = 2 ** 31 - 1;
type TMin = -2_147_483_648;
type TMax = 2_147_483_647;

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

type _TReverseStr<
	str extends string,
	res extends string = "",
> = str extends `${infer first}${infer rest}`
	? _TReverseStr<rest, `${first}${res}`>
	: res;

type TReverseStr<str extends string> = str extends `-${infer rest}`
	? `-${_TReverseStr<rest>}`
	: _TReverseStr<str>;

type TStripZeros<str extends string> = str extends `0${infer rest}`
	? TStripZeros<rest>
	: str;

type TReverseInteger<Num extends number> =
	TStripZeros<TReverseStr<`${Num}`>> extends `${infer rev extends number}`
		? TCompareNumbers<rev, TMin> extends "lesser"
			? 0
			: TCompareNumbers<rev, TMax> extends "greater"
				? 0
				: rev
		: 0;

export const reverseInteger = <const Num extends number>(
	num: Num,
): TReverseInteger<Num> => {
	const reversed = Math.abs(num).toString().split("").reverse().join("");
	const res = Number(`${num < 0 ? "-" : "+"}${reversed}`) || 0;
	if (res < minSize || res > maxSize) return 0 as never;
	return res as never;
};

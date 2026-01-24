// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side

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

type TReplaceElements<
	Arr extends number[],
	last extends number = -1,
> = Arr extends [...infer rest extends number[], infer num extends number]
	? [
			...TReplaceElements<
				rest,
				TCompareNumbers<num, last> extends "greater" ? num : last
			>,
			last,
		]
	: [];

// export const replaceElements = <const Arr extends number[]>(
// 	arr: Arr,
// ): TReplaceElements<Arr> => {
// 	const res: number[] = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		let max = -1;
// 		for (let j = i + 1; j < arr.length; j++) {
// 			const num = arr[j] as number;
// 			if (num > max) max = num;
// 		}
// 		res.push(max);
// 	}
// 	return res as never;
// };

export const replaceElements = <const Arr extends number[]>(
	arr: Arr,
): TReplaceElements<Arr> => {
	const res: number[] = [];
	let max = -1;
	for (let i = arr.length - 1; i >= 0; i--) {
		res.unshift(max);
		const num = arr[i] as number;
		if (num > max) max = num;
	}
	return res as never;
};

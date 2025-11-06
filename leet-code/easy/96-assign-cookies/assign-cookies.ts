// https://leetcode.com/problems/assign-cookies

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

type TSmallest<
	Nums extends number[],
	visited extends number,
	smallest extends { idx: number; val: number } = never,
	idx extends Array<1> = [],
> = Nums extends [infer first extends number, ...infer rest extends number[]]
	? TSmallest<
			rest,
			visited,
			idx["length"] extends visited
				? smallest
				: [smallest] extends [never]
					? { idx: idx["length"]; val: first }
					: TCompareNumbers<first, smallest["val"]> extends "lesser"
						? { idx: idx["length"]; val: first }
						: smallest,
			[...idx, 1]
		>
	: smallest;
type TSort<
	Nums extends number[],
	res extends number[] = [],
	visited extends number = never,
	smallest extends { idx: number; val: number } = TSmallest<Nums, visited>,
> = res["length"] extends Nums["length"]
	? res
	: TSort<Nums, [...res, smallest["val"]], visited | smallest["idx"]>;

type _TAssignCookies<
	Children extends number[],
	Cookies extends number[],
	count extends Array<1> = [],
> = Cookies extends [
	infer cookie extends number,
	...infer restCookies extends number[],
]
	? Children extends [
			infer child extends number,
			...infer restChildren extends number[],
		]
		? TCompareNumbers<child, cookie> extends "greater"
			? _TAssignCookies<Children, restCookies, count>
			: _TAssignCookies<restChildren, restCookies, [...count, 1]>
		: count["length"]
	: count["length"];

type TAssignCookies<
	Children extends number[],
	Cookies extends number[],
> = _TAssignCookies<TSort<Children>, TSort<Cookies>>;

export const assignCookies = <
	const Children extends number[],
	const Cookies extends number[],
>(
	children: Children,
	cookies: Cookies,
): TAssignCookies<Children, Cookies> => {
	children.sort((a, b) => a - b);
	cookies.sort((a, b) => a - b);
	let result = 0;
	let child = 0;
	for (const cookie of cookies) {
		if ((children[child] as number) <= cookie) {
			result++;
			child++;
		}
	}
	return result as never;
};

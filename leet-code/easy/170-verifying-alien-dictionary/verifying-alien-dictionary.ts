// https://leetcode.com/problems/verifying-an-alien-dictionary/

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

type TStringToMap<
	Str extends string,
	idx extends Array<1> = [],
> = Str extends `${infer first}${infer rest}`
	? Record<first, idx["length"]> & TStringToMap<rest, [...idx, 1]>
	: {};

type TCompareWords<
	A extends string,
	B extends string,
	Map extends Record<string, number>,
> = A extends B
	? "equal"
	: A extends ""
		? "lesser"
		: B extends ""
			? "greater"
			: [A, B] extends [
						`${infer firstA}${infer restA}`,
						`${infer firstB}${infer restB}`,
				  ]
				? firstA | firstB extends keyof Map
					? TCompareNumbers<Map[firstA], Map[firstB]> extends infer cmp
						? cmp extends "equal"
							? TCompareWords<restA, restB, Map>
							: cmp
						: never
					: never
				: never;

type TIsAlienSorted<
	Words extends string[],
	Order extends string,
	Map extends Record<string, number> = TStringToMap<Order>,
> = Words extends [
	infer first extends string,
	infer second extends string,
	...infer rest extends string[],
]
	? TCompareWords<first, second, Map> extends "greater"
		? false
		: TIsAlienSorted<[second, ...rest], Order, Map>
	: true;

const compareWords = (a: string, b: string, map: Map<string, number>) => {
	if (a === b) return 0;
	const len = Math.min(a.length, b.length);
	if (len === 0) throw new Error("Empty word");
	for (let i = 0; i < len; i++) {
		const aOrder = map.get(a[i] as string);
		const bOrder = map.get(b[i] as string);
		if (aOrder === undefined || bOrder === undefined)
			throw new Error("Invalid characters");
		const diff = aOrder - bOrder;
		if (diff === 0) continue;
		return diff;
	}
	return a.length > b.length ? 1 : -1;
};

export const isAlienSorted = <Words extends string[], Order extends string>(
	words: [...Words],
	order: Order,
): TIsAlienSorted<Words, Order> => {
	const map = new Map<string, number>();
	for (let i = 0; i < order.length; i++) map.set(order[i] as string, i);
	let last = null as null | string;
	for (const word of words) {
		if (last) {
			const diff = compareWords(last, word, map);
			if (diff > 0) return false as TIsAlienSorted<Words, Order>;
		}
		last = word;
	}
	return true as TIsAlienSorted<Words, Order>;
};

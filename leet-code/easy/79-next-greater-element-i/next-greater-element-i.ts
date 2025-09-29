// https://leetcode.com/problems/next-greater-element-i

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

type TAddToMap<Curr extends number, Stack extends number[]> = Stack extends [
	infer first extends number,
	...infer rest extends number[],
]
	? TCompareNumbers<Curr, first> extends "lesser"
		? { stack: [Curr, ...rest]; curr: first }
		: TAddToMap<Curr, rest>
	: { stack: [Curr]; curr: -1 };

type TCreateMap<
	Arr extends number[],
	stack extends number[] = [],
	map extends Record<number, number> = {},
> = Arr extends [...infer rest extends number[], infer last extends number]
	? TAddToMap<last, stack> extends {
			stack: infer newStack extends number[];
			curr: infer curr extends number;
		}
		? TCreateMap<rest, newStack, map & Record<last, curr>>
		: never
	: map;

type TNextGreaterElement<
	Nums1 extends number[],
	Nums2 extends number[],
	Map extends Record<number, number> = TCreateMap<Nums2>,
> = Nums1 extends [infer first extends number, ...infer rest extends number[]]
	? [Map[first], ...TNextGreaterElement<rest, Nums2, Map>]
	: [];

// export const nextGreaterElement = <
// 	const Nums1 extends number[],
// 	const Nums2 extends number[],
// >(
// 	nums1: Nums1,
// 	nums2: Nums2,
// ): TNextGreaterElement<Nums1, Nums2> => {
// 	const remaining = new Set<number>();
// 	const map = new Map<number, number>();
// 	for (const num of nums2) {
// 		for (const r of remaining) {
// 			if (num <= r) continue;
// 			map.set(r, num);
// 			remaining.delete(r);
// 		}
// 		remaining.add(num);
// 	}
// 	return nums1.map((num) => map.get(num) ?? -1) as never;
// };

export const nextGreaterElement = <
	const Nums1 extends number[],
	const Nums2 extends number[],
>(
	nums1: Nums1,
	nums2: Nums2,
): TNextGreaterElement<Nums1, Nums2> => {
	const stack: number[] = [];
	const map = new Map<number, number>();
	for (let idx = nums2.length - 1; idx >= 0; idx--) {
		const curr = nums2[idx] as number;
		while (stack.length > 0 && (stack.at(-1) as number) <= curr) {
			stack.pop();
		}
		map.set(curr, stack.at(-1) ?? -1);
		stack.push(curr);
	}
	return nums1.map((num) => map.get(num) ?? -1) as never;
};

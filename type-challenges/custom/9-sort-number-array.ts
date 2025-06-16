import type { Equal, Expect } from "@type-challenges/utils";

type toInt<T extends number> = T extends T
	? `${T}` extends `${infer int extends number}.${string}`
		? int
		: T
	: never;

type abs<T extends number | string> = T extends T
	? `${T}` extends `-${infer truncated extends number}`
		? truncated
		: T
	: never;

type toFractional<T extends number> = `${T}` extends `${string}.${infer d}`
	? d
	: "";

type tuple<
	size extends number,
	res extends unknown[] = [],
> = res["length"] extends size ? res : tuple<size, [...res, 1]>;

type numberToTuple<
	num extends number | string,
	str extends string = `${abs<num>}`,
	res extends number[] = [],
> = str extends `${infer curr extends number}${infer rest}`
	? numberToTuple<never, rest, [...res, curr]>
	: res;

type reverseIfNegative<
	T extends "lesser" | "greater",
	areNegative extends boolean,
> = areNegative extends true ? (T extends "lesser" ? "greater" : "lesser") : T;

type compareDigits<
	digitA extends number,
	digitB extends number,
	areNegative extends boolean,
	tupA extends unknown[] = tuple<digitA>,
	tupB extends unknown[] = tuple<digitB>,
> = digitA extends digitB
	? "equal"
	: tupA[tupB["length"]] extends 1
		? reverseIfNegative<"greater", areNegative>
		: reverseIfNegative<"lesser", areNegative>;

type _compareNumbers<
	tupA extends number[],
	tupB extends number[],
	areNegative extends boolean,
> = tupA["length"] extends tupB["length"]
	? [tupA, tupB] extends [
			[infer firstA extends number, ...infer restA extends number[]],
			[infer firstB extends number, ...infer restB extends number[]],
		]
		? compareDigits<firstA, firstB, areNegative> extends infer res
			? res extends "equal"
				? _compareNumbers<restA, restB, areNegative>
				: res
			: never
		: never
	: tupA[tupB["length"]] extends number
		? reverseIfNegative<"greater", areNegative>
		: reverseIfNegative<"lesser", areNegative>;

type compareNumbers<
	numA extends number,
	numB extends number,
	isANeg extends boolean = abs<numA> extends numA ? false : true,
	isBNeg extends boolean = abs<numB> extends numB ? false : true,
> = numA extends numB
	? "equal"
	: [isANeg, isBNeg] extends [true, false]
		? "lesser"
		: [isANeg, isBNeg] extends [false, true]
			? "greater"
			: toInt<numA> extends toInt<numB>
				? _compareNumbers<
						numberToTuple<toFractional<numA>>,
						numberToTuple<toFractional<numB>>,
						isANeg
					>
				: _compareNumbers<numberToTuple<numA>, numberToTuple<numB>, isANeg>;

type removeFromTuple<Arr extends unknown[], ToRemove> = Arr extends [
	infer first,
	...infer rest,
]
	? first extends ToRemove
		? rest
		: [first, ...removeFromTuple<rest, ToRemove>]
	: [];

type findBiggest<
	Original extends number[],
	Arr extends number[] = Original,
	biggest extends number = never,
> = Arr extends [infer first extends number, ...infer rest extends number[]]
	? findBiggest<
			Original,
			rest,
			[biggest] extends [never]
				? first
				: compareNumbers<first, biggest> extends "greater"
					? first
					: biggest
		>
	: [biggest] extends [never]
		? never
		: [biggest, removeFromTuple<Original, biggest>];

type _2 = SortNumberArr<[1, 2, 3, 10, 4, 5], "desc">;
//   ^?

type SortNumberArr<
	Arr extends number[],
	direction extends "asc" | "desc",
	res extends number[] = [],
> = Arr extends []
	? res
	: findBiggest<Arr> extends [
				infer biggest extends number,
				infer rest extends number[],
		  ]
		? SortNumberArr<
				rest,
				direction,
				direction extends "asc" ? [biggest, ...res] : [...res, biggest]
			>
		: res;

type _cases = [
	Expect<Equal<SortNumberArr<[5, 3, 4, 1, 2], "asc">, [1, 2, 3, 4, 5]>>,
	Expect<Equal<SortNumberArr<[5, 3, 4, 1, 2], "desc">, [5, 4, 3, 2, 1]>>,
];

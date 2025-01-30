import type { Equal, Expect } from "@type-challenges/utils";

type tuple<
	size extends number,
	res extends unknown[] = [],
> = res["length"] extends size ? res : tuple<size, [...res, 1]>;

type numberToTuple<
	num extends number,
	str extends string = `${num}`,
	res extends number[] = [],
> = str extends `${infer curr extends number}${infer rest}`
	? numberToTuple<never, rest, [...res, curr]>
	: res;

type compareDigits<
	digitA extends number,
	digitB extends number,
	tupA extends unknown[] = tuple<digitA>,
	tupB extends unknown[] = tuple<digitB>,
> = digitA extends digitB
	? "equal"
	: tupA[tupB["length"]] extends 1
		? "greater"
		: "lesser";

type compareNumbers<
	numA extends number,
	numB extends number,
	tupA extends number[] = numberToTuple<numA>,
	tupB extends number[] = numberToTuple<numB>,
> = numA extends numB
	? "equal"
	: tupA["length"] extends tupB["length"]
		? [tupA, tupB] extends [
				[infer firstA extends number, ...infer restA extends number[]],
				[infer firstB extends number, ...infer restB extends number[]],
			]
			? compareDigits<firstA, firstB> extends infer res
				? res extends "equal"
					? compareNumbers<numA, numB, restA, restB>
					: res
				: never
			: never
		: tupA[tupB["length"]] extends number
			? "greater"
			: "lesser";

type toInt<T extends number> = T extends T
	? `${T}` extends `${infer int extends number}.${string}`
		? int
		: T
	: never;

type trunc<T extends number> = T extends T
	? `${T}` extends `-${infer truncated extends number}`
		? truncated
		: T
	: never;

type TCompareType = ">" | "<" | ">=" | "<=" | "=";

type validComparison =
	| ["equal", ">=" | "=" | "<="]
	| ["lesser", "<=" | "<"]
	| ["greater", ">=" | ">"];

type TNumberComparator<
	Num extends number,
	ToCompare extends number,
	Type extends TCompareType,
> = Num extends Num
	? compareNumbers<
			toInt<trunc<Num>>,
			toInt<trunc<ToCompare>>
		> extends infer result
		? [result, Type] extends validComparison
			? Num
			: never
		: never
	: never;

type _ = TNumberComparator<typeof _num, 20, "<">;
//   ^?

type TCheckPositiveInt<T extends number> =
	trunc<toInt<T>> extends T ? T : "Only positive integers allowed";

function numberComparator<
	Num extends number,
	ToCompare extends number,
	Type extends TCompareType,
>(
	input: TCheckPositiveInt<Num>,
	toCompare: TCheckPositiveInt<ToCompare>,
	type: Type,
): input is TNumberComparator<Num & TCheckPositiveInt<Num>, ToCompare, Type> {
	const val = input as number;
	const comp = toCompare as number;
	switch (type) {
		case ">":
			return val > comp;
		case "<":
			return val < comp;
		case ">=":
			return val >= comp;
		case "<=":
			return val <= comp;
		case "=":
			return val === (toCompare as never);
		default:
			throw new Error("invalid operator");
	}
}

declare const _num: 1 | 2 | 3 | 4 | 50_000 | 65_000 | 10_000_001 | 20;
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
_num;
//^?

if (numberComparator(_num, 20, ">=")) {
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	_num;
	//^?
}
type _cases = [
	Expect<
		Equal<
			TNumberComparator<typeof _num, 20, ">=">,
			Exclude<typeof _num, 1 | 2 | 3 | 4>
		>
	>,
	Expect<
		Equal<
			TNumberComparator<typeof _num, 20, ">">,
			Exclude<typeof _num, 1 | 2 | 3 | 4 | 20>
		>
	>,
	Expect<Equal<TNumberComparator<typeof _num, 20, "=">, 20>>,
	Expect<Equal<TNumberComparator<typeof _num, 20, "<=">, 1 | 2 | 3 | 4 | 20>>,
	Expect<Equal<TNumberComparator<typeof _num, 20, "<">, 1 | 2 | 3 | 4>>,
];

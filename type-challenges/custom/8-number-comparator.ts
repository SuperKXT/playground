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
	? compareNumbers<Num, ToCompare> extends infer result
		? [result, Type] extends validComparison
			? Num
			: never
		: never
	: never;

type _ = TNumberComparator<typeof _num, 20, "=">;
//   ^?

type TCheckInt<T extends number> =
	toInt<T> extends T ? T : "Only integers allowed";

function numberComparator<
	Num extends number,
	ToCompare extends number,
	Type extends TCompareType,
>(
	input: TCheckInt<Num>,
	toCompare: TCheckInt<ToCompare>,
	type: Type,
): input is TNumberComparator<Num & TCheckInt<Num>, ToCompare, Type> {
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

declare const _num:
	| 1
	| 2
	| 3
	| 4
	| 50_000
	| 65_000
	| 10_000_001
	| 20
	| -20
	| 20.234;
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
_num;
//^?

if (numberComparator(_num, 20, ">=")) {
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	_num;
	//^?
}
type _cases = [
	Expect<Equal<compareNumbers<20, 21>, "lesser">>,
	Expect<Equal<compareNumbers<-21, -20>, "lesser">>,
	Expect<Equal<compareNumbers<-21, -21>, "equal">>,
	Expect<Equal<compareNumbers<-21, 21>, "lesser">>,
	Expect<Equal<compareNumbers<21, -21>, "greater">>,
	Expect<Equal<compareNumbers<0, -21>, "greater">>,
	Expect<Equal<compareNumbers<0, 21>, "lesser">>,
	Expect<Equal<compareNumbers<2134.012345, 2134.012346>, "lesser">>,
	Expect<Equal<compareNumbers<2134.012345, 2134.012345>, "equal">>,
	Expect<Equal<compareNumbers<2134.012345, 2134.012344>, "greater">>,
	Expect<
		Equal<
			TNumberComparator<typeof _num, 20, ">=">,
			Exclude<typeof _num, 1 | 2 | 3 | 4 | -20>
		>
	>,
	Expect<
		Equal<
			TNumberComparator<typeof _num, 20, ">">,
			Exclude<typeof _num, 1 | 2 | 3 | 4 | 20 | -20>
		>
	>,
	Expect<Equal<TNumberComparator<typeof _num, 20, "=">, 20>>,
	Expect<
		Equal<TNumberComparator<typeof _num, 20, "<=">, 1 | 2 | 3 | 4 | 20 | -20>
	>,
	Expect<Equal<TNumberComparator<typeof _num, 20, "<">, 1 | 2 | 3 | 4 | -20>>,
];

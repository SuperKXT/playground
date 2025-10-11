// https://leetcode.com/problems/find-smallest-letter-greater-than-target

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

type TLetterTup = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
type TLetter = TLetterTup[number];

type TGetNums<Alpha extends readonly TLetter[]> = {
	-readonly [k in keyof Alpha as k extends keyof Array<unknown>
		? never
		: Alpha[k] & string]: k extends `${infer num extends number}` ? num : never;
};

type TLetterMap = TGetNums<TLetterTup>;

type _TNextGreatestLetter<
	Letters extends TLetter[],
	Target extends number,
	res extends string | undefined = undefined,
> = Letters extends [
	infer first extends TLetter,
	...infer rest extends TLetter[],
]
	? TCompareNumbers<TLetterMap[first], Target> extends "greater"
		? _TNextGreatestLetter<
				rest,
				Target,
				res extends TLetter
					? TCompareNumbers<
							TLetterMap[res],
							TLetterMap[first]
						> extends "greater"
						? first
						: res
					: first
			>
		: _TNextGreatestLetter<rest, Target, res>
	: res;

type TNextGreatestLetter<
	Letters extends [TLetter, ...TLetter[]],
	Target extends TLetter,
> =
	_TNextGreatestLetter<Letters, TLetterMap[Target]> extends infer val extends
		TLetter
		? val
		: Letters[0];

export const nextGreatestLetter = <
	const Letters extends [TLetter, ...TLetter[]],
	Target extends TLetter,
>(
	letters: Letters,
	target: Target,
): TNextGreatestLetter<Letters, Target> => {
	let res: undefined | string = undefined;
	for (const letter of letters) {
		if (letter.localeCompare(target) <= 0) continue;
		if (!res || res.localeCompare(letter) > 0) res = letter;
	}
	if (!res) return letters[0] as never;
	return res as never;
};

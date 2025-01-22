type TDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type TInteger<T extends number> = `${T}` extends `${infer I extends
	number}.${string}`
	? I
	: T;

export type TUnsignedInt<T extends number | string | bigint> =
	`${T}` extends `-${infer I extends number}`
		? TInteger<I>
		: `${T}` extends `${infer I extends number}`
			? TInteger<I>
			: never;

type TArrayReverse<T extends TDigit[], Out extends TDigit[] = []> = T extends [
	...infer Rest extends TDigit[],
	infer L extends TDigit,
]
	? TArrayReverse<Rest, [...Out, L]>
	: Out;

type TFill<T extends number, A extends number[] = []> = A["length"] extends T
	? A
	: TFill<T, [...A, 1]>;

type TShift<T extends number[]> = T extends [
	unknown,
	...infer R extends number[],
]
	? R
	: never;

type TNumberToArray<
	T extends number,
	R extends string = `${T}`,
	A extends TDigit[] = [],
> = R extends `${infer F extends TDigit}${infer L}`
	? TNumberToArray<T, L, [...A, F]>
	: A;

type TArrayToNumber<T extends TDigit[], R extends string = ""> = T extends [
	infer F extends TDigit,
	...infer Rest extends TDigit[],
]
	? TArrayToNumber<Rest, `${R}${F}`>
	: `${R}` extends `${infer I extends number}`
		? I
		: never;

type TGreaterThanDigits<
	T extends number[],
	U extends number[],
	TF extends number[] = TFill<T[0]>,
	UF extends number[] = TFill<U[0]>,
> = T["length"] extends 0
	? false
	: T[0] extends U[0]
		? TGreaterThanDigits<TShift<T>, TShift<U>>
		: UF[TF["length"]] extends undefined
			? true
			: false;

type TGreaterThan<
	T extends number,
	U extends number,
	TA extends number[] = TNumberToArray<T>,
	UA extends number[] = TNumberToArray<U>,
> = T extends U
	? false
	: TA["length"] extends UA["length"]
		? TGreaterThanDigits<TA, UA>
		: UA[TA["length"]] extends undefined
			? true
			: false;

type TMax<T extends number[], M extends number = never> = T extends [
	infer F extends number,
	...infer R extends number[],
]
	? TGreaterThan<F, M> extends true
		? TMax<R, F>
		: TMax<R, M>
	: M;

type TPadLeft<T extends TDigit[], Size extends number> = [
	0,
	...T,
][Size] extends TDigit
	? T
	: TPadLeft<[0, ...T], Size>;

type TAddDigits<T extends TDigit[], R extends unknown[] = []> = T extends [
	infer F extends TDigit,
	...infer Rest extends TDigit[],
]
	? TAddDigits<Rest, [...R, ...TFill<F>]>
	: TPadLeft<TNumberToArray<R["length"]>, 2>;

type _TInnerSum<
	A extends TDigit[],
	B extends TDigit[],
	R extends TDigit[] = [],
	Carry extends TDigit = 0,
> = A extends [infer FA extends TDigit, ...infer RA extends TDigit[]]
	? B extends [infer FB extends TDigit, ...infer RB extends TDigit[]]
		? TAddDigits<[FA, FB, Carry]> extends [
				infer NewCarry extends TDigit,
				infer Sum extends TDigit,
			]
			? _TInnerSum<RA, RB, [...R, Sum], NewCarry>
			: never
		: never
	: Carry extends 0
		? R
		: [...R, Carry];

export type TSum<
	A extends string | number | bigint,
	B extends string | number | bigint,
	ArrayA extends TDigit[] = TNumberToArray<TUnsignedInt<A>>,
	ArrayB extends TDigit[] = TNumberToArray<TUnsignedInt<B>>,
	MaxNum extends number = TMax<[ArrayA["length"], ArrayB["length"]]>,
> = TArrayToNumber<
	TArrayReverse<
		_TInnerSum<
			TArrayReverse<TPadLeft<ArrayA, MaxNum>>,
			TArrayReverse<TPadLeft<ArrayB, MaxNum>>
		>
	>
>;

const options = [6, 3, 2] as const;

type TOption = (typeof options)[number];

type TCombination = { sum: number; combination: number[] };

type TGreatestInTuple<
	T extends number[],
	Val extends number = T[0],
> = T extends [infer first extends number, ...infer rest extends number[]]
	? TGreatestInTuple<rest, TGreaterThan<first, Val> extends true ? first : Val>
	: Val;

type TRemoveFromTuple<T extends number[], Remove extends number> = T extends [
	infer first extends number,
	...infer rest extends number[],
]
	? first extends Remove
		? rest
		: [first, ...TRemoveFromTuple<rest, Remove>]
	: [];

type TSortTuple<T extends number[]> =
	TGreatestInTuple<T> extends infer curr extends number
		? [...TSortTuple<TRemoveFromTuple<T, curr>>, curr]
		: [];

type TGetCombinations<
	Target extends number,
	Current extends TCombination = { sum: 0; combination: [] },
	Opts extends TOption = TOption,
> = Opts extends Opts
	? TSum<Current["sum"], Opts> extends infer sum extends number
		? sum extends Target
			? TSortTuple<[...Current["combination"], Opts]>
			: TGreaterThan<sum, Target> extends true
				? never
				: TGetCombinations<
						Target,
						{ sum: sum; combination: [...Current["combination"], Opts] }
					>
		: never
	: never;

type TCountUnionMembers<T, Count extends 1[] = [], U = T> = [U] extends [never]
	? Count["length"]
	: U extends U
		? TCountUnionMembers<Exclude<T, U>, [...Count, 1]>
		: Count["length"];

type TWaysToScore<Target extends number> = TCountUnionMembers<
	TGetCombinations<Target>
>;

const getCombinations = (
	targetSum: number,
	current: TCombination = { sum: 0, combination: [] },
): TCombination[] => {
	const combinations: TCombination[] = [];
	for (const option of options) {
		const sum = current.sum + option;
		const combination = [...current.combination, option];
		if (sum === targetSum) combinations.push({ sum, combination });
		else if (sum < targetSum)
			combinations.push(...getCombinations(targetSum, { sum, combination }));
	}
	return combinations;
};

export const waysToScore = <Target extends number>(
	target: Target,
): TWaysToScore<Target> => {
	const candidates = getCombinations(target).map((r) =>
		r.combination.sort((a, b) => a - b),
	);
	const existSet = new Set<string>();
	let count = 0;
	for (const candidate of candidates) {
		const key = candidate.join(",");
		if (existSet.has(key)) continue;
		existSet.add(key);
		count++;
	}
	return count as never;
};

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
	A extends number[] = [],
> = R extends `${infer F extends number}${infer L}`
	? TNumberToArray<T, L, [...A, F]>
	: A;

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

type TIncreasingSubsequence<
	Arr extends number[],
	longest extends unknown[] = [],
	curr extends unknown[] = [],
> = Arr extends [
	infer last extends number,
	infer num extends number,
	...infer rest extends number[],
]
	? TGreaterThan<num, last> extends true
		? TIncreasingSubsequence<[num, ...rest], longest, [...curr, 1]>
		: TIncreasingSubsequence<
				[num, ...rest],
				longest[curr["length"]] extends number ? longest : curr,
				[1]
			>
	: longest[curr["length"]] extends number
		? longest["length"]
		: curr["length"];

export const increasingSubsequence = <const Arr extends [number, ...number[]]>(
	array: Arr,
): TIncreasingSubsequence<Arr> => {
	let longest = 0;
	let curr = 0;
	let last = Infinity;
	for (const num of array) {
		if (num > last) {
			curr++;
		} else {
			longest = Math.max(longest, curr);
			curr = 1;
		}
		last = num;
	}
	return Math.max(longest, curr) as never;
};

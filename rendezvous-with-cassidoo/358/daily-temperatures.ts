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

type TFindGreaterIdx<
	curr extends number,
	arr extends number[],
	idx extends number[] = [1],
> = arr extends [infer first extends number, ...infer rest extends number[]]
	? TGreaterThan<first, curr> extends true
		? idx["length"]
		: TFindGreaterIdx<curr, rest, [...idx, 1]>
	: 0;

type TDailyTemps<input extends number[]> = input extends [
	infer first extends number,
	...infer rest extends number[],
]
	? [TFindGreaterIdx<first, rest>, ...TDailyTemps<rest>]
	: [];

export const dailyTemperatures = <const Input extends [number, ...number[]]>(
	input: Input,
): TDailyTemps<Input> => {
	return input.map((num, idx) =>
		Math.max(
			input.slice(idx).findIndex((n) => n > num),
			0,
		),
	) as never;
};

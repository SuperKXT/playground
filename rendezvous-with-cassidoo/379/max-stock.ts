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

type TCount<
	from extends number,
	to extends number,
	idx extends 1[] = [],
	count extends number[] = [],
> = idx["length"] extends to
	? count["length"]
	: TCount<
			from,
			to,
			[...idx, 1],
			[...idx, 1][from] extends 1 ? [...count, 1] : count
		>;

type TMaxStock<
	Prices extends number[],
	low extends number = never,
	high extends number = never,
	count extends 1[] = [],
> = Prices extends [infer curr extends number, ...infer rest extends number[]]
	? TGreaterThan<low, curr> extends true
		? TMaxStock<rest, curr, curr, [1]>
		: TGreaterThan<curr, high> extends true
			? TMaxStock<rest, low, curr, [...count, 1]>
			: TMaxStock<rest, low, high, count>
	: TCount<low, high>;

export const maxStock = <const Prices extends [number, ...number[]]>(
	prices: Prices,
): TMaxStock<Prices> => {
	let low = Infinity;
	let high = -Infinity;
	for (const price of prices) {
		if (low > price) {
			low = price;
			high = price;
		} else if (high < price) {
			high = price;
		}
	}
	return (high - low) as never;
};

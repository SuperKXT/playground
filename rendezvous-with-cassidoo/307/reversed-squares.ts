type _TTuple<
	N extends number,
	T,
	R extends readonly T[],
> = R["length"] extends N ? R : _TTuple<N, T, [T, ...R]>;

type TTuple<N extends number, T = 1> = N extends N
	? number extends N
		? T[]
		: _TTuple<N, T, []>
	: never;

type TMultiply<
	T extends number,
	U extends number,
	idx extends 1[] = [],
	result extends 1[] = [],
> = idx["length"] extends U
	? result
	: TMultiply<T, U, [...idx, 1], [...result, ...TTuple<T>]>;

type TSqrt<
	T extends number,
	idx extends 1[] = [],
	square extends 1[] = TMultiply<idx["length"], idx["length"]>,
> = square["length"] extends T
	? idx["length"]
	: square[T] extends 1
		? never
		: TSqrt<T, [...idx, 1]>;

type TReverse<T extends string> = T extends `${infer F}${infer R}`
	? `${TReverse<R>}${F}`
	: T;

type TReverseNumber<T extends number> =
	TReverse<`${T}`> extends `${infer N extends number}` ? N : never;

type TReversedSquare<T extends number> = [TSqrt<T>] extends [never]
	? false
	: [TSqrt<TReverseNumber<T>>] extends [never]
		? false
		: true;

export const reversedSquare = <T extends number>(
	num: T,
): TReversedSquare<T> => {
	const reverse = Number(String(num).split("").reverse().join(""));
	return (Number.isInteger(Math.sqrt(num)) &&
		Number.isInteger(Math.sqrt(reverse))) as never;
};

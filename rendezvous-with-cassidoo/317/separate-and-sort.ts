type TTuple<T extends number, tup extends 1[] = []> = tup["length"] extends T
	? tup
	: TTuple<T, [...tup, 1]>;

type TSmallest<T extends number[], curr extends 1[] = []> = T extends [
	infer first extends number,
	...infer rest extends number[],
]
	? TSmallest<
			rest,
			curr extends []
				? TTuple<first>
				: curr extends [...TTuple<first>, ...number[]]
					? TTuple<first>
					: curr
		>
	: curr["length"];

type TWithout<
	T extends number[],
	N extends number,
	res extends number[] = [],
> = T extends [infer first extends number, ...infer rest extends number[]]
	? first extends N
		? [...res, ...rest]
		: TWithout<rest, N, [...res, first]>
	: res;

type TSort<T extends number[], sorted extends number[] = []> = T extends [
	number,
	...number[],
]
	? TSort<TWithout<T, TSmallest<T>>, [...sorted, TSmallest<T>]>
	: sorted;

type TIsEven<
	T extends number,
	tup extends 1[] = TTuple<T>,
	idx extends 1[] = [],
> = tup extends [...idx, ...idx]
	? true
	: tup extends [...idx, ...idx, 1]
		? false
		: TIsEven<never, tup, [...idx, 1]>;

type TUnReadonly<T extends readonly unknown[]> = T extends readonly [
	...infer arr,
]
	? arr
	: T;

type TDeepReadonly<T extends object> = Readonly<{
	[k in keyof T]: T[k] extends object ? TDeepReadonly<T[k]> : T[k];
}>;

type TSeparateAndSort<
	T extends readonly number[],
	sorted extends number[] = TSort<TUnReadonly<T>>,
	res extends [number[], number[]] = [[], []],
> = sorted extends [infer first extends number, ...infer rest extends number[]]
	? TSeparateAndSort<
			never,
			rest,
			first extends 0
				? res
				: TIsEven<first> extends true
					? [[...res[0], first], res[1]]
					: [res[0], [...res[1], first]]
		>
	: TDeepReadonly<res>;

export const separateAndSort = <const T extends readonly number[]>(
	input: T,
): TSeparateAndSort<T> => {
	const result: [number[], number[]] = [[], []];
	for (const num of input.toSorted((a, b) => a - b)) {
		if (!num) continue;
		const mod = (num % 2) as 0 | 1;
		result[mod].push(num);
	}
	return result as never;
};

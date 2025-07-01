type TPrettify<T> = { [k in keyof T]: T[k] } & {};

type TMap = {
	0: 1;
	1: 2;
	2: 3;
	3: 4;
	4: 5;
	5: 6;
	6: 7;
	7: 8;
	8: 9;
	9: 0;
};

type TAddOne<T extends string> =
	T extends `${infer last extends keyof TMap}${infer rest}`
		? last extends 9
			? `${TMap[last]}${TAddOne<rest>}`
			: `${TMap[last]}${rest}`
		: never;

type TGetKey<T extends object, K, Fallback = undefined> = K extends keyof T
	? T[K] extends undefined
		? Fallback
		: T[K]
	: Fallback;

type TCount<
	Str extends string,
	res extends Record<string, string> = {},
> = Str extends `${infer first}${infer rest}`
	? TCount<
			rest,
			TPrettify<
				Omit<res, first> & Record<first, TAddOne<TGetKey<res, first, "0">>>
			>
		>
	: res;

type TReverse<Str extends string> = Str extends `${infer first}${infer rest}`
	? `${TReverse<rest>}${first}`
	: "";

export type TNonRepeat<
	Str extends string,
	counts extends Record<string, string> = TCount<Str>,
	reversed extends string = TReverse<Str>,
> = reversed extends `${infer first}${infer rest}`
	? counts[first] extends "1"
		? first
		: TNonRepeat<never, counts, rest>
	: "";

export const nonRepeat = <const Str extends string>(
	str: Str,
): TNonRepeat<Str> => {
	const counts = new Map<string, number>();
	for (const c of str) counts.set(c, (counts.get(c) ?? 0) + 1);
	for (let i = str.length - 1; i >= 0; i--) {
		const curr = str[i] as string;
		if (counts.get(curr) === 1) return curr as never;
	}
	return "" as never;
};

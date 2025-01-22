import type { Equal, Expect } from "@type-challenges/utils";

export const binaryPal = <T extends number>(input: T) => {
	const binary = Math.abs(input).toString(2);
	return (binary === binary.split("").reverse().join("")) as TBinaryPal<T>;
};

type TBinaryPal<T extends number> = TIsPalindrome<TNumberToBinary<T>>;

type TNumberToBinary<
	T extends number,
	Arr extends unknown[] = TNumberToArray<TUnsigned<T>>,
	Binary extends unknown[] = [],
> =
	THalve<Arr> extends [infer Halved extends unknown[], infer Remainder]
		? Halved extends []
			? [Remainder, ...Binary]
			: TNumberToBinary<T, Halved, [Remainder, ...Binary]>
		: never;

type TIsPalindrome<T extends unknown[]> = T extends [
	infer F,
	...infer R,
	infer L,
]
	? [F] extends [L]
		? TIsPalindrome<R>
		: false
	: true;

type THalve<T extends unknown[], L extends unknown[] = []> = T extends [
	infer F,
	unknown,
	...infer R,
]
	? THalve<R, [...L, F]>
	: [L, T extends [unknown] ? 1 : 0];

type TUnsigned<T extends number> = `${T}` extends `-${infer U extends number}`
	? U
	: T;

type TNumberToArray<
	T extends number,
	A extends 1[] = [],
> = A["length"] extends T ? A : TNumberToArray<T, [...A, 1]>;

type _TCases = [
	Expect<Equal<TBinaryPal<5>, true>>,
	Expect<Equal<TBinaryPal<10>, false>>,
	Expect<Equal<TBinaryPal<23>, false>>,
	Expect<Equal<TBinaryPal<152>, false>>,
	Expect<Equal<TBinaryPal<-250>, false>>,
	Expect<Equal<TBinaryPal<513>, true>>,
	Expect<Equal<TBinaryPal<-513>, true>>,
];

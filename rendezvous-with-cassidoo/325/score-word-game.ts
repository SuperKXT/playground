type TTuple<
	size extends number,
	tup extends 1[] = [],
> = tup["length"] extends size ? tup : TTuple<size, [...tup, 1]>;

type TShift<T extends number[]> = T extends [
	unknown,
	...infer R extends number[],
]
	? R
	: never;

type TNumberToTuple<
	T extends number,
	R extends string = `${T}`,
	A extends number[] = [],
> = R extends `${infer F extends number}${infer L}`
	? TNumberToTuple<T, L, [...A, F]>
	: A;

type TGreaterThanDigits<
	T extends number[],
	U extends number[],
	TF extends number[] = TTuple<T[0]>,
	UF extends number[] = TTuple<U[0]>,
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
	TA extends number[] = TNumberToTuple<T>,
	UA extends number[] = TNumberToTuple<U>,
> = T extends U
	? false
	: TA["length"] extends UA["length"]
		? TGreaterThanDigits<TA, UA>
		: UA[TA["length"]] extends undefined
			? true
			: false;

type TStringToUnion<T extends string> = T extends `${infer first}${infer rest}`
	? first | TStringToUnion<rest>
	: never;

type TStrLength<
	T extends string,
	tup extends 1[] = [],
> = T extends `${string}${infer rest}`
	? TStrLength<rest, [...tup, 1]>
	: tup["length"];

type TMultiply<
	times extends number,
	tup extends 1[],
	res extends 1[] = [],
	idx extends 1[] = [],
> = idx["length"] extends times
	? res["length"]
	: TMultiply<times, tup, [...res, ...tup], [...idx, 1]>;

type TWordScore<
	T extends string,
	scores extends Record<TStringToUnion<T>, number>,
	str extends string = T,
	score extends 1[] = [],
> = str extends `${infer first}${infer rest}`
	? first extends keyof scores
		? TTuple<scores[first]> extends infer newScore extends 1[]
			? TWordScore<T, scores, rest, [...score, ...newScore]>
			: never
		: never
	: TMultiply<TStrLength<T>, score>;

type TScoreWordGame<
	str extends readonly string[],
	scores extends Record<TStringToUnion<str[number]>, number>,
	highest extends { score: number; word: string } = { score: 0; word: "" },
> = str extends readonly [
	infer first extends string,
	...infer rest extends string[],
]
	? scores extends Record<TStringToUnion<first>, number>
		? TScoreWordGame<
				rest,
				scores,
				TGreaterThan<TWordScore<first, scores>, highest["score"]> extends true
					? { word: first; score: TWordScore<first, scores> }
					: highest
			>
		: never
	: highest["word"];

export const scoreWordGame = <
	const Str extends readonly string[],
	Scores extends Record<TStringToUnion<Str[number]>, number>,
>(
	words: Str,
	scores: Scores,
): TScoreWordGame<Str, Scores> => {
	const winner: { score: number; word: string } = { score: 0, word: "" };
	for (const word of words) {
		const score =
			word.length *
			Array.from(word)
				.map((char) => scores[char as keyof typeof scores])
				.reduce((acc, curr) => acc + curr, 0);
		if (score > winner.score) {
			winner.score = score;
			winner.word = word;
		}
	}
	return winner.word as never;
};

type TPrettify<T> = { [k in keyof T]: T[k] } & {};

type TAlphabet = "abcdefghijklmnopqrstuvwxyz";

type TOffset = TTuple<98>;

export type TLetterScores<
	tup extends string = TAlphabet,
	map extends Record<string, number> = {},
	idx extends 1[] = [],
> = tup extends `${infer first}${infer rest}`
	? TLetterScores<
			rest,
			map & Record<first, [...TOffset, ...idx]["length"]>,
			[...idx, 1]
		>
	: TPrettify<map>;

const words = [
	"zero",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
] as const;

type TWords = typeof words;

type TJoinWords<T extends string[], isFirst = true> = T extends [
	infer first extends string,
	...infer rest extends string[],
]
	? `${isFirst extends true ? "" : ", then "}${first}${TJoinWords<rest, false>}`
	: "";

type TSay<char extends string, count extends number[]> = `${TWords[[
	...count,
	1,
]["length"]]} ${char}s`;

type TCountAndSay<
	T extends string,
	str extends string[] = [],
	count extends 1[] = [],
> = T extends `${infer first}${infer next}${infer rest}`
	? first extends next
		? TCountAndSay<`${next}${rest}`, str, [...count, 1]>
		: TCountAndSay<`${next}${rest}`, [...str, TSay<first, count>]>
	: T extends `${infer first}${string}`
		? TCountAndSay<"", [...str, TSay<first, count>]>
		: TJoinWords<str>;

export const countAndSay = <const T extends number>(
	input: T,
): TCountAndSay<`${T}`> => {
	const string = input.toString();
	const response: string[] = [];
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		const curr = string[i] as string;
		const next = string[i + 1] as string;
		count++;
		if (curr !== next) {
			response.push(`${words[count] as string} ${curr}s`);
			count = 0;
		}
	}
	return response.join(", then ") as never;
};

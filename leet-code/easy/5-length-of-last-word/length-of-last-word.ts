// 	https://leetcode.com/problems/length-of-last-word

type TReverseString<Str extends string> =
	Str extends `${infer first}${infer rest}`
		? `${TReverseString<rest>}${first}`
		: Str;
type TTrimStart<Str extends string> = Str extends ` ${infer rest}`
	? TTrimStart<rest>
	: Str;

type TLengthOfLastWord<
	Str extends string,
	reversed extends string = TTrimStart<TReverseString<Str>>,
	length extends Array<1> = [],
> = reversed extends `${infer first}${infer rest}`
	? first extends " "
		? length["length"]
		: TLengthOfLastWord<never, rest, [...length, 1]>
	: length["length"];

// export const lengthOfLastWord = (str: string): number => {
// 	let length = 0;
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		const char = str[i];
// 		if (char !== " ") length++;
// 		else if (length > 0) return length;
// 	}
// 	return length;
// };

export const lengthOfLastWord = <const Str extends string>(
	str: Str,
): TLengthOfLastWord<Str> => {
	return (str.trimEnd().split(" ").at(-1)?.length ?? 0) as never;
};

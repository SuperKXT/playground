// https://leetcode.com/problems/reverse-words-iii

type TReverseWords<
	S extends string,
	word extends string = "",
	res extends string = "",
> = S extends `${infer char}${infer rest}`
	? TReverseWords<
			rest,
			char extends " " ? "" : `${char}${word}`,
			char extends " " ? `${res}${word} ` : res
		>
	: `${res}${word}`;

export const reverseWords = <S extends string>(s: S): TReverseWords<S> => {
	let word = "";
	let result = "";
	for (const char of s) {
		if (char === " ") {
			result += `${word} `;
			word = "";
		} else {
			word = `${char}${word}`;
		}
	}
	return `${result}${word}` as never;
};

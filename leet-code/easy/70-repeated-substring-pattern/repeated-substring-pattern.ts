// https://leetcode.com/problems/repeated-substring-pattern

type TCheckSubstring<
	Substring extends string,
	Remaining extends string,
> = Remaining extends ""
	? true
	: Remaining extends `${Substring}${infer rest}`
		? TCheckSubstring<Substring, rest>
		: false;

type TRepeatedSubstringPattern<
	S extends string,
	substring extends string = "",
> = S extends `${infer first}${infer rest}`
	? rest extends ""
		? false
		: TCheckSubstring<`${substring}${first}`, rest> extends true
			? true
			: TRepeatedSubstringPattern<rest, `${substring}${first}`>
	: false;

// ! Too slow
// export const repeatedSubstringPattern = (s: string): boolean => {
// 	let substring = "";
// 	for (const char of s) {
// 		substring += char;
// 		if (substring === s) break;
// 		const regex = new RegExp(substring, "gu");
// 		const missing = s.replace(regex, "");
// 		if (!missing) return true as boolean;
// 	}
// 	return false as boolean;
// };

export const repeatedSubstringPattern = <S extends string>(
	s: S,
): TRepeatedSubstringPattern<S> => {
	let substring = "";
	for (const char of s) {
		substring += char;
		if (substring === s) break;
		let remaining = s.slice(substring.length);
		while (remaining.startsWith(substring)) {
			remaining = remaining.slice(substring.length);
		}
		if (!remaining) return true as never;
	}
	return false as never;
};

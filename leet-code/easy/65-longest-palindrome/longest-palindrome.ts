// https://leetcode.com/problems/longest-palindrome

type TLongestPalindrome<
	S extends string,
	res extends 1[] = [],
	spare extends boolean = false,
> = S extends `${infer first}${infer rest}`
	? rest extends `${infer before}${first}${infer after}`
		? TLongestPalindrome<`${before}${after}`, [...res, 1, 1], spare>
		: TLongestPalindrome<rest, res, true>
	: spare extends true
		? [...res, 1]["length"]
		: res["length"];

export const longestPalindrome = <S extends string>(
	s: S,
): TLongestPalindrome<S> => {
	const set = new Set<string>();
	let count = 0;
	for (const char of s) {
		if (set.has(char)) {
			set.delete(char);
			count += 2;
		} else {
			set.add(char);
		}
	}
	if (set.size > 0) count += 1;
	return count as never;
};

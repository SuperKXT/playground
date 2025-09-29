// https://leetcode.com/problems/is-subsequence

type TIsSubsequence<
	S extends string,
	T extends string,
> = S extends `${infer first}${infer sRest}`
	? T extends `${string}${first}${infer tRest}`
		? TIsSubsequence<sRest, tRest>
		: false
	: true;

export const isSubsequence = <S extends string, T extends string>(
	s: S,
	t: T,
): TIsSubsequence<S, T> => {
	let idx = 0;
	for (const char of t) {
		if (idx === s.length) break;
		if (char === s[idx]) idx++;
	}
	return (idx === s.length) as never;
};

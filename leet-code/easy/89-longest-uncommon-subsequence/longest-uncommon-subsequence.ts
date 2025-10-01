// https://leetcode.com/problems/longest-uncommon-subsequence-i

type TBiggerStringLength<
	A extends string,
	B extends string,
	len extends 1[] = [],
> = A extends `${string}${infer aRest}`
	? B extends `${string}${infer bRest}`
		? TBiggerStringLength<aRest, bRest, [...len, 1]>
		: TBiggerStringLength<aRest, B, [...len, 1]>
	: B extends `${string}${infer bRest}`
		? TBiggerStringLength<A, bRest, [...len, 1]>
		: len["length"];

type TLongestUncommonSubsequence<
	A extends string,
	B extends string,
> = A extends B ? -1 : TBiggerStringLength<A, B>;

export const longestUncommonSubsequence = <A extends string, B extends string>(
	a: A,
	b: B,
): TLongestUncommonSubsequence<A, B> => {
	if (a === (b as string)) return -1 as never;
	return Math.max(a.length, b.length) as never;
};

// https://leetcode.com/problems/valid-anagram

type TIsAnagram<
	A extends string,
	B extends string,
> = A extends `${infer first}${infer rest}`
	? B extends `${infer before}${first}${infer after}`
		? TIsAnagram<rest, `${before}${after}`>
		: false
	: B extends ""
		? true
		: false;

export const isAnagram = <const A extends string, const B extends string>(
	a: A,
	b: B,
): TIsAnagram<A, B> => {
	const aSorted = a.split("").sort().join("");
	const bSorted = b.split("").sort().join("");
	return (aSorted === bSorted) as never;
};

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

// export const isAnagram = <const A extends string, const B extends string>(
// 	a: A,
// 	b: B,
// ): TIsAnagram<A, B> => {
// 	const aSorted = a.split("").sort().join("");
// 	const bSorted = b.split("").sort().join("");
// 	return (aSorted === bSorted) as never;
// };

export const isAnagram = <const A extends string, const B extends string>(
	a: A,
	b: B,
): TIsAnagram<A, B> => {
	const counts = new Map<string, number>();
	for (const char of a) {
		counts.set(char, (counts.get(char) ?? 0) + 1);
	}
	for (const char of b) {
		counts.set(char, (counts.get(char) ?? 0) - 1);
	}
	for (const count of counts.values()) {
		if (count !== 0) return false as never;
	}
	return true as never;
};

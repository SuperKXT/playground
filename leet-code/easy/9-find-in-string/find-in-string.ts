// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

type TFindInString<
	Haystack extends string,
	Needle extends string,
	idx extends 1[] = [],
> = Haystack extends `${Needle}${string}`
	? idx["length"]
	: Haystack extends `${string}${infer rest}`
		? TFindInString<rest, Needle, [...idx, 1]>
		: -1;

export const findInString = <
	const Haystack extends string,
	const Needle extends string,
>(
	haystack: Haystack,
	needle: Needle,
): TFindInString<Haystack, Needle> => {
	for (let idx = 0; idx < haystack.length; idx++) {
		if (haystack.slice(idx).startsWith(needle)) return idx as never;
	}
	return -1 as never;
};

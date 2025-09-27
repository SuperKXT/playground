// https://leetcode.com/problems/number-of-segments-in-a-string

type TStringSegments<
	S extends string,
	count extends 1[] = [],
	hasNonSpace extends boolean = false,
> = S extends `${infer first}${infer rest}`
	? first extends " "
		? hasNonSpace extends true
			? TStringSegments<rest, [...count, 1]>
			: TStringSegments<rest, count>
		: TStringSegments<rest, count, true>
	: hasNonSpace extends true
		? [...count, 1]["length"]
		: count["length"];

export const stringSegments = <S extends string>(s: S): TStringSegments<S> => {
	let hasNonSpace = false;
	let count = 0;
	for (const char of s) {
		if (char !== " ") {
			hasNonSpace = true;
		} else if (hasNonSpace) {
			hasNonSpace = false;
			count++;
		}
	}
	if (hasNonSpace) count++;
	return count as never;
};

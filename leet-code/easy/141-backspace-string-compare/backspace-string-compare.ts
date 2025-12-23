// https://leetcode.com/problems/backspace-string-compare

type TReverseString<Str extends string> =
	Str extends `${infer first}${infer rest}`
		? `${TReverseString<rest>}${first}`
		: "";

type TRemoveFirstChar<Str extends string> = Str extends `${string}${infer rest}`
	? rest
	: "";

type TParseString<
	Str extends string,
	parsed extends string = "",
> = Str extends `${infer first}${infer rest}`
	? first extends "#"
		? TParseString<rest, TRemoveFirstChar<parsed>>
		: TParseString<rest, `${first}${parsed}`>
	: TReverseString<parsed>;

type TBackspaceCompare<S extends string, T extends string> =
	TParseString<S> extends TParseString<T> ? true : false;

const parseString = (str: string): string => {
	let parsed = "";
	for (const char of str) {
		if (char === "#") parsed = parsed.slice(0, -1);
		else parsed += char;
	}
	return parsed;
};

export const backspaceCompare = <S extends string, T extends string>(
	s: S,
	t: T,
): TBackspaceCompare<S, T> => {
	return (parseString(s) === parseString(t)) as never;
};

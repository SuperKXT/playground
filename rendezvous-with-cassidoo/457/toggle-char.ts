type TIsAlphabet<T extends string> =
	Lowercase<T> extends Uppercase<T> ? false : true;

type TIsUpperCase<T extends string> = Lowercase<T> extends T ? false : true;

type TAlternateChar<
	T extends string,
	last extends "upper" | "lower" = "lower",
> = T extends `${infer first}${infer rest}`
	? TIsAlphabet<first> extends true
		? last extends "lower"
			? `${Uppercase<first>}${TAlternateChar<rest, "upper">}`
			: `${Lowercase<first>}${TAlternateChar<rest>}`
		: `${first}${TAlternateChar<rest, last>}`
	: "";

type _TToggleChar<T extends string> = T extends `${infer first}${infer rest}`
	? `${TIsUpperCase<first> extends true ? Lowercase<first> : Uppercase<first>}${_TToggleChar<rest>}`
	: "";

type TToggleChar<
	T extends string,
	Alternating extends boolean,
> = Alternating extends true ? TAlternateChar<T> : _TToggleChar<T>;

const isUpperCase = (char: string): boolean => {
	const code = char.charCodeAt(0);
	return code >= 65 && code <= 90;
};

const isAlphabet = (char: string): boolean => {
	const code = char.charCodeAt(0);
	return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

const alternateChar = (str: string): string => {
	let res = "";
	let last: "upper" | "lower" = "lower";
	for (const char of str) {
		if (!isAlphabet(char)) {
			res += char;
		} else if (last === "lower") {
			res += char.toUpperCase();
			last = "upper";
		} else {
			res += char.toLowerCase();
			last = "lower";
		}
	}
	return res;
};

export const toggleChar = <
	Str extends string,
	Alternating extends boolean = false,
>(
	str: Str,
	alternating?: Alternating,
): TToggleChar<Str, Alternating> => {
	if (alternating) return alternateChar(str) as never;

	let res = "";
	for (const char of str) {
		if (isUpperCase(char)) {
			res += char.toLowerCase();
		} else {
			res += char.toUpperCase();
		}
	}
	return res as never;
};

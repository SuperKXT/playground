type TTrimType = "leading" | "trailing" | "both" | "compress";

type TCompress<
	Str extends string,
	last extends string = "",
> = Str extends `${infer first}${infer rest}`
	? first | last extends " "
		? TCompress<rest, first>
		: `${first}${TCompress<rest, first>}`
	: Str;

type TTrimLeft<Str extends string> = Str extends ` ${infer rest}`
	? TTrimLeft<rest>
	: Str;

type TTrimRight<Str extends string> = Str extends `${infer rest} `
	? TTrimRight<rest>
	: Str;

type TTrim<Type extends TTrimType, Str extends string> = Type extends "compress"
	? TCompress<Str>
	: Type extends "leading"
		? TTrimLeft<Str>
		: Type extends "trailing"
			? TTrimRight<Str>
			: TTrimRight<TTrimLeft<Str>>;

export const trim = <Type extends TTrimType, Str extends string>(
	type: Type,
	s: Str,
): TTrim<Type, Str> => {
	if (type === "compress") {
		let res = "";
		let last = "";
		for (const char of s) {
			if (last === " " && char === " ") continue;
			last = char;
			res += char;
		}
		return res as never;
	}

	let startIdx = 0;
	let endIdx = s.length - 1;
	if (type !== "trailing") {
		for (startIdx; startIdx < s.length; startIdx++) {
			if (s[startIdx] !== " ") break;
		}
	}
	if (type !== "leading") {
		for (endIdx; endIdx >= 0; endIdx--) {
			if (s[endIdx] !== " ") break;
		}
	}
	return s.slice(startIdx, endIdx + 1) as never;
};

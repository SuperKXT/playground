// https://leetcode.com/problems/detect-capital

type TUpper =
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "N"
	| "O"
	| "P"
	| "Q"
	| "R"
	| "S"
	| "T"
	| "U"
	| "V"
	| "W"
	| "X"
	| "Y"
	| "Z";

type _TDetectCapital<
	Rest extends string,
	Casing extends "upper" | "lower" | "capital",
> = Rest extends `${infer first}${infer rest}`
	? Casing extends "upper"
		? first extends TUpper
			? _TDetectCapital<rest, Casing>
			: false
		: first extends TUpper
			? false
			: _TDetectCapital<rest, Casing>
	: true;

type TDetectCapital<Word extends string> =
	Word extends `${infer first}${infer second}${infer rest}`
		? first extends TUpper
			? _TDetectCapital<rest, second extends TUpper ? "upper" : "capital">
			: second extends TUpper
				? false
				: _TDetectCapital<rest, "lower">
		: true;

const getIsUpper = (char: string | undefined): boolean => {
	if (!char) return false;
	const curr = char;
	const code = curr.charCodeAt(0);
	return code >= 65 && code <= 90;
};

export const detectCapital = <Word extends string>(
	word: Word,
): TDetectCapital<Word> => {
	if (word.length === 1) return true as never;
	const isFirstUpper = getIsUpper(word[0]);
	const isSecondUpper = getIsUpper(word[1]);
	if (!isFirstUpper && isSecondUpper) return false as never;

	const casing = isFirstUpper ? (isSecondUpper ? "upper" : "capital") : "lower";
	for (let i = 2; i < word.length; i++) {
		const isUpper = getIsUpper(word[i]);
		if (casing === "upper" && !isUpper) return false as never;
		if (casing !== "upper" && isUpper) return false as never;
	}

	return true as never;
};

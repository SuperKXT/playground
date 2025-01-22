type TAlphabetArray = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

type TAlphabet = TAlphabetArray[number];

export type TMissingLetters<
	T extends readonly TAlphabet[],
	A extends readonly unknown[] = TAlphabetArray,
	Flag extends boolean = false,
	Gaps extends readonly TAlphabet[] = [],
> = A extends readonly [infer F extends TAlphabet, ...infer R]
	? F extends [0, ...T][T["length"]]
		? Gaps
		: Flag extends false
			? TMissingLetters<T, R, F extends T[0] ? true : false>
			: TMissingLetters<T, R, true, F extends T[number] ? Gaps : [...Gaps, F]>
	: Gaps;

export const missingLetters = <const T extends readonly TAlphabet[]>(
	array: T,
): TMissingLetters<T> => {
	const missing: string[] = [];
	for (let i = 1; i < array.length; i++) {
		const currCode = array[i]?.charCodeAt(0) ?? 0;
		const lastCode = array[i - 1]?.charCodeAt(0) ?? 0;
		for (let j = lastCode + 1; j < currCode; j++)
			missing.push(String.fromCharCode(j));
	}
	return missing as never;
};

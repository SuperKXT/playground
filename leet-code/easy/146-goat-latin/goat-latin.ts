// https://leetcode.com/problems/goat-latin

const vowels = ["a", "e", "i", "o", "u"] as const;
type TVowel = (typeof vowels)[number];

const vowelSet = new Set(vowels);

type TIsVowel<T extends TVowel> = Lowercase<T> extends TVowel ? true : false;

type TRepeatString<
	Str extends string,
	Count extends number,
	idx extends Array<1> = [],
> = idx["length"] extends Count
	? ""
	: `${Str}${TRepeatString<Str, Count, [...idx, 1]>}`;

type TToGoat<
	Word extends string,
	WordCount extends number,
> = Word extends `${infer first}${infer rest}`
	? first extends TVowel
		? `${Word}ma${TRepeatString<"a", WordCount>}`
		: `${rest}${first}ma${TRepeatString<"a", WordCount>}`
	: "";

type TGoatLatin<
	Str extends string,
	Count extends Array<1> = [1],
> = Str extends `${infer word} ${infer rest}`
	? `${TToGoat<word, Count["length"]>} ${TGoatLatin<rest, [...Count, 1]>}`
	: Str extends ""
		? ""
		: TToGoat<Str, Count["length"]>;

// export const goatLatin = (sentence: string): string => {
// 	const words = sentence.split(" ");
// 	let res: string = "";
// 	let num = 1;
// 	for (const word of words) {
// 		const first = word.at(0);
// 		if (!first) continue;
// 		const prefix = res === "" ? "" : " ";
// 		const curr = !vowelSet.has(first.toLowerCase())
// 			? word.slice(1) + first
// 			: word;
// 		const postfix = `ma${"a".repeat(num)}`;
// 		res += `${prefix}${curr}${postfix}`;
// 		num++;
// 	}
// 	return res;
// };

export const goatLatin = <Sentence extends string>(
	sentence: Sentence,
): TGoatLatin<Sentence> => {
	let first: string = "";
	let word = "";
	let wordCount = 1;
	let res = "";
	for (let i = 0; i < sentence.length; i++) {
		const char = sentence[i] as string;
		if (char === " " || i === sentence.length - 1) {
			if (char !== " ") word += char;
			res += !vowelSet.has(first.toLowerCase())
				? `${word}${first}`
				: `${first}${word}`;
			res += `ma${"a".repeat(wordCount)}`;
			if (char === " ") res += char;
			first = "";
			word = "";
			wordCount++;
		} else if (!first) {
			first = char;
		} else {
			word += char;
		}
	}
	return res as never;
};

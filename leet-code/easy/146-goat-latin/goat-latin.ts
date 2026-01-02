// https://leetcode.com/problems/goat-latin

const vowels = ["a", "e", "i", "o", "u"] as const;
type TVowel = (typeof vowels)[number];

const vowelSet = new Set(vowels);

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

export const goatLatin = (sentence: string): string => {
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
	return res;
};

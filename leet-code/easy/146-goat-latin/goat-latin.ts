// https://leetcode.com/problems/goat-latin

const vowels = ["a", "e", "i", "o", "u"] as const;
type TVowel = (typeof vowels)[number];

const vowelSet = new Set(vowels);

export const goatLatin = (sentence: string): string => {
	const words = sentence.split(" ");
	let res: string = "";
	let num = 1;
	for (const word of words) {
		const first = word.at(0);
		if (!first) continue;
		const prefix = res === "" ? "" : " ";
		const curr = !vowelSet.has(first.toLowerCase())
			? word.slice(1) + first
			: word;
		const postfix = `ma${"a".repeat(num)}`;
		res += `${prefix}${curr}${postfix}`;
		num++;
	}
	return res;
};

// https://leetcode.com/problems/reverse-words-iii

export const reverseWords = (s: string): string => {
	let word = "";
	let result = "";
	for (const char of s) {
		if (char === " ") {
			result += `${word} `;
			word = "";
		} else {
			word = `${char}${word}`;
		}
	}
	if (word) result += word;
	return result as never;
};

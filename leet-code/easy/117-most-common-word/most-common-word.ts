// https://leetcode.com/problems/most-common-word

// export const mostCommonWord = (paragraph: string, banned: string[]): string => {
// 	const bannedSet = new Set(banned);
// 	const map = new Map<string, number>();
// 	const words = paragraph.split(" ");
// 	const max = { count: 0, word: "" };
// 	for (const row of words) {
// 		const word = row.toLowerCase().replace(/[^\w]+/gu, "");
// 		if (bannedSet.has(word)) continue;
// 		const existing = (map.get(word) ?? 0) + 1;
// 		map.set(word, existing);
// 		if (existing > max.count) {
// 			max.count = existing;
// 			max.word = word;
// 		}
// 	}
// 	return max.word;
// };

const checkWord = (
	word: string,
	max: { count: number; word: string },
	map: Map<string, number>,
) => {
	const existing = (map.get(word) ?? 0) + 1;
	map.set(word, existing);
	if (existing > max.count) {
		max.count = existing;
		max.word = word;
	}
};

export const mostCommonWord = (paragraph: string, banned: string[]): string => {
	const bannedSet = new Set(banned);
	const map = new Map<string, number>();
	const max = { count: 0, word: "" };
	let word = "";
	for (const char of paragraph) {
		if (char === " ") {
			if (bannedSet.has(word)) {
				word = "";
				continue;
			}
			checkWord(word, max, map);
			word = "";
			continue;
		}

		const code = char.charCodeAt(0);
		if (code >= 97 && code <= 122) word += char;
		else if (code >= 65 && code <= 90) word += char.toLowerCase();
	}
	checkWord(word, max, map);
	return max.word;
};

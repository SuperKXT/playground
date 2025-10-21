// https://leetcode.com/problems/shortest-completing-word/description

export const shortestCompletingWord = (
	licensePlate: string,
	words: string[],
): string => {
	const map = new Map<string, number>();
	for (const curr of licensePlate) {
		const char = curr.toLowerCase();
		const code = char.charCodeAt(0);
		const isLetter = code >= 97 && code <= 122;
		if (!isLetter) continue;
		map.set(char, (map.get(char) ?? 0) + 1);
	}
	const sorted = words.toSorted((a, b) => a.length - b.length);
	for (const word of sorted) {
		const currMap = new Map(map);
		for (const curr of word) {
			const char = curr.toLowerCase();
			const existing = currMap.get(char);
			if (!existing) continue;
			if (existing === 1) currMap.delete(char);
			else currMap.set(char, existing - 1);
			if (currMap.size === 0) return word;
		}
	}
	throw new Error("No completing word found");
};

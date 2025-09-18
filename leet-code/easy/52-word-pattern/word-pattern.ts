// https://leetcode.com/problems/word-pattern

export const wordPattern = (pattern: string, s: string): boolean => {
	const words = s.split(" ");
	if (words.length !== pattern.length) return false;

	const map = new Map<string, string>();
	const set = new Set<string>();
	for (let idx = 0; idx < pattern.length; idx++) {
		const char = pattern[idx] as string;
		const word = words[idx] as string;
		const expected = map.get(char);
		if (expected) {
			if (word !== expected) return false;
		} else {
			if (set.has(word)) return false;
			map.set(char, word);
		}
		set.add(word);
	}
	return true;
};

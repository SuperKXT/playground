// https://leetcode.com/problems/ransom-note

export const ransomNote = (note: string, magazine: string): boolean => {
	const map = new Map<string, number>();
	for (const char of magazine) map.set(char, (map.get(char) ?? 0) + 1);
	for (const char of note) {
		const existing = map.get(char) ?? 0;
		if (!existing) return false;
		map.set(char, existing - 1);
	}
	return true;
};

// https://leetcode.com/problems/group-anagrams

export const groupAnagrams = (arr: string[]): string[][] => {
	const groups = new Map<string, string[]>();
	for (const str of arr) {
		const sorted = str.split("").sort().join("");
		const existing = groups.get(sorted);
		if (existing) existing.push(str);
		else groups.set(sorted, [str]);
	}
	return Array.from(groups.values());
};

// https://leetcode.com/problems/longest-uncommon-subsequence-i

export const longestUncommonSubsequence = (a: string, b: string): number => {
	if (a === b) return -1;
	return Math.max(a.length, b.length);
};

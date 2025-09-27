// https://leetcode.com/problems/longest-palindrome

export const longestPalindrome = (s: string): number => {
	const set = new Set<string>();
	let count = 0;
	for (const char of s) {
		if (set.has(char)) {
			set.delete(char);
			count += 2;
		} else {
			set.add(char);
		}
	}
	if (set.size > 0) count += 1;
	return count;
};

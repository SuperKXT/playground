// https://leetcode.com/problems/license-key-formatting

export const isSubsequence = (s: string, t: string): boolean => {
	let idx = 0;
	for (const char of t) {
		if (idx === s.length) break;
		if (char === s[idx]) idx++;
	}
	return idx === s.length;
};

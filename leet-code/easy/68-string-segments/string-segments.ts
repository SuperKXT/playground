// https://leetcode.com/problems/number-of-segments-in-a-string

export const stringSegments = (s: string): number => {
	let hasNonSpace = false;
	let count = 0;
	for (const char of s) {
		if (char !== " ") {
			hasNonSpace = true;
		} else if (hasNonSpace) {
			hasNonSpace = false;
			count++;
		}
	}
	if (hasNonSpace) count++;
	return count;
};

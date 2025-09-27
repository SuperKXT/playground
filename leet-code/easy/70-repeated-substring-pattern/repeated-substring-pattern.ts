// https://leetcode.com/problems/repeated-substring-pattern

// export const repeatedSubstringPattern = (s: string): boolean => {
// 	let substring = "";
// 	for (const char of s) {
// 		substring += char;
// 		if (substring === s) break;
// 		const regex = new RegExp(substring, "gu");
// 		const missing = s.replace(regex, "");
// 		if (!missing) return true as boolean;
// 	}
// 	return false as boolean;
// };

export const repeatedSubstringPattern = (s: string): boolean => {
	let substring = "";
	for (const char of s) {
		substring += char;
		if (substring === s) break;
		let remaining = s.slice(substring.length);
		while (remaining.startsWith(substring)) {
			remaining = remaining.slice(substring.length);
		}
		if (!remaining) return true as boolean;
	}
	return false as boolean;
};

// https://leetcode.com/problems/remove-outermost-parentheses

export const removeOuterParentheses = (s: string): string => {
	let level = 0;
	let res = "";
	for (const char of s) {
		if (char === ")") {
			level--;
			if (level !== 0) res += char;
		} else if (char === "(") {
			if (level !== 0) res += char;
			level++;
		} else res += char;
	}
	return res;
};

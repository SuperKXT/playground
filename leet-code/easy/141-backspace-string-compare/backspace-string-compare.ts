// https://leetcode.com/problems/backspace-string-compare

const parseString = (str: string): string => {
	let parsed = "";
	for (const char of str) {
		if (char === "#") parsed = parsed.slice(0, -1);
		else parsed += char;
	}
	return parsed;
};

export const backspaceCompare = (s: string, t: string): boolean => {
	return parseString(s) === parseString(t);
};

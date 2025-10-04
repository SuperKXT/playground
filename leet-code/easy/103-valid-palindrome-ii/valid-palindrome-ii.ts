// https://leetcode.com/problems/valid-palindrome-ii

const reverse = (s: string): string => {
	let left = "";
	let right = "";
	const mid = Math.ceil(s.length / 2);
	for (let i = 0; i < mid; i++) {
		const end = s.length - i - 1;
		if (end !== i) left += s[end] as string;
		right = `${s[i] as string}${right}`;
	}
	return `${left}${right}`;
};

export const validPalindrome = (s: string): boolean => {
	if (s === reverse(s)) return true;
	let prev = "";
	for (let i = 0; i < s.length; i++) {
		const curr = `${prev}${s.slice(i + 1)}`;
		prev += s[i] as string;
		if (curr === reverse(curr)) return true;
	}
	return false;
};

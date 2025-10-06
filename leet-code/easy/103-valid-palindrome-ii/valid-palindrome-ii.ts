// https://leetcode.com/problems/valid-palindrome-ii

// const reverse = (s: string): string => {
// 	let left = "";
// 	let right = "";
// 	const mid = Math.ceil(s.length / 2);
// 	for (let i = 0; i < mid; i++) {
// 		const end = s.length - i - 1;
// 		if (end !== i) left += s[end] as string;
// 		right = `${s[i] as string}${right}`;
// 	}
// 	return `${left}${right}`;
// };

// ! Too slow
// export const validPalindrome = (s: string): boolean => {
// 	if (s === reverse(s)) return true;
// 	let prev = "";
// 	for (let i = 0; i < s.length; i++) {
// 		const curr = `${prev}${s.slice(i + 1)}`;
// 		prev += s[i] as string;
// 		if (curr === reverse(curr)) return true;
// 	}
// 	return false;
// };

const isPalindrome = (s: string): boolean => {
	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		if (s[i] !== s[s.length - i - 1]) return false;
	}
	return true;
};

export const validPalindrome = (s: string): boolean => {
	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		const rightIdx = s.length - i - 1;
		const left = s[i];
		const right = s[rightIdx];
		if (left === right) continue;
		const leftNext = s[i + 1];
		const rightNext = s[rightIdx - 1];
		return (
			(leftNext === right &&
				isPalindrome(`${s.slice(0, i)}${s.slice(i + 1)}`)) ||
			(rightNext === left &&
				isPalindrome(`${s.slice(0, rightIdx)}${s.slice(rightIdx + 1)}`))
		);
	}
	return true;
};

// https://leetcode.com/problems/reverse-bits

export const reverseBits = (num: number): number => {
	const str = num.toString(2).padStart(32, "0");
	const reversed = str.split("").reverse().join("");
	return parseInt(reversed, 2);
};

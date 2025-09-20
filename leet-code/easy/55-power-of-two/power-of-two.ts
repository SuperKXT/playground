// https://leetcode.com/problems/power-of-two

export const powerOfTwo = (n: number): boolean => {
	return Number.isInteger(Math.log2(n));
};

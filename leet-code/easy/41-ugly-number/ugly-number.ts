// https://leetcode.com/problems/ugly-number

export const uglyNumber = (num: number): boolean => {
	if (num === 0) return false;
	let curr = num;
	while (curr % 2 === 0) curr /= 2;
	while (curr % 3 === 0) curr /= 3;
	while (curr % 5 === 0) curr /= 5;
	return curr === 1;
};

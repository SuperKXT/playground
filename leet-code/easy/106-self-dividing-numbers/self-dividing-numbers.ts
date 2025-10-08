// https://leetcode.com/problems/self-dividing-numbers

const isSelfDividing = (num: number): boolean => {
	for (const char of num.toString()) {
		const digit = Number(char);
		if (num % digit !== 0) return false;
	}
	return true;
};
export const selfDividingNumbers = (left: number, right: number): number[] => {
	const res: number[] = [];
	for (let i = left; i <= right; i++) {
		if (isSelfDividing(i)) res.push(i);
	}
	return res;
};

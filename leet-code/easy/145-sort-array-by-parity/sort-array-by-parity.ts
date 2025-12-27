// https://leetcode.com/problems/sort-array-by-parity

export const sortArrayByParity = (nums: number[]): number[] => {
	const res: number[] = [];
	for (const num of nums) {
		if (num % 2 === 0) res.unshift(num);
		else res.push(num);
	}
	return res;
};

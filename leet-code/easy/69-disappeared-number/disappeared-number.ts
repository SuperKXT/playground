// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

export const disappearedNumbers = (nums: number[]): number[] => {
	const set = new Set<number>();
	for (let i = 1; i <= nums.length; i++) set.add(i);
	for (const num of nums) set.delete(num);
	return Array.from(set);
};

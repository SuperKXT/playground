// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

// export const disappearedNumbers = (nums: number[]): number[] => {
// 	const set = new Set<number>();
// 	for (let i = 1; i <= nums.length; i++) set.add(i);
// 	for (const num of nums) set.delete(num);
// 	return Array.from(set);
// };

export const disappearedNumbers = (nums: number[]): number[] => {
	const missing: number[] = [];
	for (const num of nums) {
		const idx = Math.abs(num) - 1;
		nums[idx] = -Math.abs(nums[idx] as number);
	}
	for (let idx = 1; idx <= nums.length; idx++) {
		if ((nums[idx - 1] as number) > 0) missing.push(idx);
	}
	return missing;
};

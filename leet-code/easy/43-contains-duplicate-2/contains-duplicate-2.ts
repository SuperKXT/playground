// https://leetcode.com/problems/contains-duplicate-ii

// export const containsDuplicate = (nums: number[], k: number): boolean => {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j <= i + k; j++) {
// 			if (nums[i] === nums[j]) return true;
// 		}
// 	}
// 	return false;
// };

export const containsDuplicate = (nums: number[], k: number): boolean => {
	const idxMap = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const val = nums[i] as number;
		const existing = idxMap.get(val) ?? -Infinity;
		if (i - existing <= k) return true;
		idxMap.set(val, i);
	}
	return false;
};

// export const containsDuplicate = (nums: number[]): boolean => {
// 	return new Set(nums).size !== nums.length;
// };

export const containsDuplicate = (nums: number[]): boolean => {
	const set = new Set<number>();
	for (const num of nums) {
		if (set.has(num)) return true;
		set.add(num);
	}
	return false;
};

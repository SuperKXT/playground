// https://leetcode.com/problems/remove-element

export const removeElement = (nums: number[], val: number): number => {
	for (let idx = 0; idx < nums.length; idx++) {
		const curr = nums[idx] as number;
		if (curr === val) {
			nums.splice(idx, 1);
			idx--;
		}
	}
	return nums.length;
};

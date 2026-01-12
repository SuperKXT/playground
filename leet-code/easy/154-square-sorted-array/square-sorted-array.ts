// https://leetcode.com/problems/squares-of-a-sorted-array

export const sortedSquares = (nums: number[]): number[] => {
	let leftIdx = 0;
	let rightIdx = nums.length - 1;
	if (nums.length === 0) return [];
	const res: number[] = [];
	while (true) {
		const left = nums[leftIdx] as number;
		const right = nums[rightIdx] as number;
		if (leftIdx === rightIdx) {
			res.unshift(left ** 2);
			break;
		} else if (Math.abs(left) > Math.abs(right)) {
			res.unshift(left ** 2);
			leftIdx++;
		} else {
			res.unshift(right ** 2);
			rightIdx--;
		}
	}
	return res;
};

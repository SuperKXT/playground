// https://leetcode.com/problems/find-pivot-index

export const pivotIndex = (nums: number[]): number => {
	let leftSum = 0;
	const left: number[] = [];
	let rightSum = 0;
	const right: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		const rightIdx = nums.length - i - 1;
		left.push(leftSum);
		leftSum += nums[i] as number;
		right.unshift(rightSum);
		rightSum += nums[rightIdx] as number;
	}
	for (let i = 0; i < left.length; i++) {
		if (left[i] === right[i]) return i;
	}
	return -1;
};

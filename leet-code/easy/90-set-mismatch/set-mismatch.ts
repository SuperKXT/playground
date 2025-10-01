// https://leetcode.com/problems/set-mismatch

export const setMismatch = (nums: number[]): number[] => {
	const set = new Set<number>();
	let duplicate = 0;
	let expectedSum = 0;
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		expectedSum += i + 1;
		const num = nums[i] as number;
		if (set.has(num)) {
			duplicate = num;
		} else {
			sum += num;
			set.add(num);
		}
	}
	return [duplicate, expectedSum - sum];
};

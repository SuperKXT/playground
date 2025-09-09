export const sumOfNeighbors = (nums: number[]): number => {
	let sum: number = 0;
	for (let idx = 0; idx < nums.length; idx++) {
		const curr = nums[idx] ?? 0;
		const prev = nums[idx - 1] ?? 0;
		const next = nums[idx + 1] ?? 0;
		sum += curr + prev + next;
	}
	return sum as never;
};

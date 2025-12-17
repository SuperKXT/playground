// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards

export const gcd = (nums: number[]): number => {
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0] as number;
	let smallest = Infinity;
	for (const num of nums) {
		smallest = Math.min(smallest, num);
	}
	for (let i = smallest; i > 1; i--) {
		if (nums.every((num) => num % i === 0)) {
			return i;
		}
	}
	return 1;
};

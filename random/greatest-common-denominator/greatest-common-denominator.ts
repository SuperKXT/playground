// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards

// export const gcd = (nums: number[]): number => {
// 	if (nums.length === 0) return 0;
// 	if (nums.length === 1) return nums[0] as number;
// 	let smallest = Infinity;
// 	for (const num of nums) {
// 		smallest = Math.min(smallest, num);
// 	}
// 	for (let i = smallest; i > 1; i--) {
// 		if (nums.every((num) => num % i === 0)) {
// 			return i;
// 		}
// 	}
// 	return 1;
// };

const _gcd = (a: number, b: number): number => {
	return b === 0 ? a : _gcd(b, a % b);
};

export const gcd = (nums: number[]): number => {
	const [first, ...rest] = nums;
	if (first === undefined) return 0;
	let res = first;
	if (rest.length > 1) {
		for (const num of rest) {
			const prev = res;
			res = _gcd(res, num);
		}
	}
	return res;
};

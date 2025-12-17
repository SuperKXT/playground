// https://leetcode.com/problems/find-greatest-common-divisor-of-array

// const _gcd = (a: number, b: number): number => {
// 	let curr = Math.abs(Math.min(a, b));
// 	while (curr > 1) {
// 		if (a % curr === 0 && b % curr === 0) break;
// 		curr--;
// 	}
// 	return curr;
// };

const _gcd = (a: number, b: number): number => {
	return b === 0 ? a : _gcd(b, a % b);
};

export const gcdArray = (nums: number[]): number => {
	let smallest = Infinity;
	let biggest = -Infinity;
	for (const num of nums) {
		smallest = Math.min(smallest, num);
		biggest = Math.max(biggest, num);
	}
	return _gcd(smallest, biggest);
};

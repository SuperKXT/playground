// https://leetcode.com/problems/binary-prefix-divisible-by-5

// export const prefixesDivBy5 = (nums: number[]): boolean[] => {
// 	let base = 2n ** BigInt(nums.length - 1);
// 	let curr = 0n;
// 	const res: boolean[] = [];
// 	for (const num of nums) {
// 		curr += base * BigInt(num);
// 		res.push(curr % 5n === 0n);
// 		base /= 2n;
// 	}
// 	return res;
// };

export const prefixesDivBy5 = (nums: number[]): boolean[] => {
	let prefix = 0;
	const res: boolean[] = [];
	for (const num of nums) {
		prefix = (prefix * 2 + num) % 5;
		res.push(prefix === 0);
	}
	return res;
};

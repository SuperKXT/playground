// https://leetcode.com/problems/two-sum

// export const twoSum = (nums: number[], target: number): [number, number] => {
// 	for (let i = 0; i < nums.length; i++) {
// 		const curr = nums[i] as number;
// 		const match = nums.findIndex((num, j) => i !== j && num + curr === target);
// 		if (match !== -1) return [i, match];
// 	}
// 	throw new Error("No match found!");
// };

export const twoSum = (nums: number[], target: number): [number, number] => {
	const map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i] as number;
		const pair = map.get(num);
		if (pair !== undefined) return [pair, i];
		map.set(target - num, i);
	}
	throw new Error("No match found!");
};

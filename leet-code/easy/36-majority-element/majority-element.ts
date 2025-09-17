// https://leetcode.com/problems/majority-element

// export const majorityElement = (nums: number[]): number => {
// 	const map = new Map<number, number>();
// 	for (const num of nums) {
// 		map.set(num, (map.get(num) ?? 0) + 1);
// 	}
// 	let max = { num: 0, count: 0 };
// 	for (const [num, count] of map) {
// 		if (count > max.count) max = { num, count };
// 	}
// 	return max.num;
// };

// export const majorityElement = (nums: number[]): number => {
// 	const map = new Map<number, number>();
// 	let max = { num: 0, count: 0 };
// 	for (const num of nums) {
// 		const count = (map.get(num) ?? 0) + 1;
// 		map.set(num, count);
// 		if (count > max.count) max = { num, count };
// 	}
// 	return max.num;
// };

// export const majorityElement = (nums: number[]): number => {
// 	const sorted = nums.sort((a, b) => a - b);
// 	let max = { num: 0, count: 0 };
// 	let curr = { num: -Infinity, count: 0 };
// 	for (const num of sorted) {
// 		if (curr.num !== num) {
// 			if (curr.count > max.count) max = curr;
// 			curr = { num, count: 0 };
// 		}
// 		curr.count++;
// 	}
// 	if (curr.count > max.count) max = curr;
// 	return max.num;
// };

export const majorityElement = (nums: number[]): number => {
	const max = { num: -Infinity, count: 0 };
	for (const num of nums) {
		if (max.count === 0) {
			max.num = num;
			max.count = 0;
		}
		if (max.num !== num) max.count--;
		else max.count++;
	}
	return max.num;
};

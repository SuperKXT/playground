// https://leetcode.com/problems/third-maximum-number

// export const thirdMaxNumber = (n: number[]): number => {
// 	const sorted = Array.from(new Set(n.sort((a, b) => a - b)));
// 	const res = sorted.at(-3) ?? sorted.at(-1);
// 	if (res === undefined) throw new Error("Number not found!");
// 	return res;
// };

// export const thirdMaxNumber = (nums: number[]): number => {
// 	let first = -Infinity;
// 	let second = -Infinity;
// 	let third = -Infinity;
// 	const set = new Set<number>();
// 	for (const num of nums) {
// 		if (set.has(num)) continue;
// 		set.add(num);
// 		if (num > first) {
// 			third = second;
// 			second = first;
// 			first = num;
// 		} else if (num > second) {
// 			third = second;
// 			second = num;
// 		} else if (num > third) {
// 			third = num;
// 		}
// 	}
// 	return Number.isFinite(third) ? third : first;
// };

export const thirdMaxNumber = (nums: number[]): number => {
	let first = -Infinity;
	let second = -Infinity;
	let third = -Infinity;
	for (const num of nums) {
		if (num === first || num === second || num === third) continue;
		if (num > first) {
			third = second;
			second = first;
			first = num;
		} else if (num > second) {
			third = second;
			second = num;
		} else if (num > third) {
			third = num;
		}
	}
	return Number.isFinite(third) ? third : first;
};

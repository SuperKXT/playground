// https://leetcode.com/problems/sort-array-by-parity-ii

// export const sortArrayByParityII = (nums: number[]): number[] => {
// 	let oddIdx = 1;
// 	let evenIdx = 0;
// 	const res: number[] = [];
// 	for (const num of nums) {
// 		if (num % 2 === 0) {
// 			res[evenIdx] = num;
// 			evenIdx += 2;
// 		} else {
// 			res[oddIdx] = num;
// 			oddIdx += 2;
// 		}
// 	}
// 	return res;
// };

// export const sortArrayByParityII = (nums: number[]): number[] => {
// 	const indices = { even: 0, odd: 1 };
// 	const ogSize = nums.length;
// 	let size = nums.length;
// 	const set = new Set<number>();
// 	for (let i = 0; i < size; i++) {
// 		if (set.has(i)) continue;
// 		const num = nums[i] as number;
// 		const key = num % 2 === 0 ? "even" : "odd";
// 		const idx = indices[key];
// 		set.add(idx);
// 		if (idx > i && nums[idx] !== undefined) {
// 			nums.push(nums[idx]);
// 			size++;
// 		}
// 		nums[idx] = num;
// 		indices[key] += 2;
// 	}
// 	nums.splice(ogSize);
// 	return nums;
// };

// export const sortArrayByParityII = (nums: number[]): number[] => {
// 	const indices: Record<"even" | "odd", number[]> = { even: [], odd: [] };
// 	for (let i = 0; i < nums.length; i++) {
// 		const num = nums[i] as number;
// 		const key = num % 2 === 0 ? "even" : "odd";
// 		if (num % 2 !== i % 2) indices[key].push(i);
// 		const even = indices.even.at(-1);
// 		const odd = indices.odd.at(-1);
// 		if (even !== undefined && odd !== undefined) {
// 			const oddVal = nums[odd] as number;
// 			nums[odd] = nums[even] as number;
// 			nums[even] = oddVal;
// 			indices.even.pop();
// 			indices.odd.pop();
// 		}
// 	}
// 	return nums;
// };

export const sortArrayByParityII = (nums: number[]): number[] => {
	let evenIdx = 0;
	let oddIdx = 1;
	while (evenIdx <= nums.length && oddIdx <= nums.length) {
		const even = nums[evenIdx] as number;
		const odd = nums[oddIdx] as number;
		if (even % 2 === 0) evenIdx += 2;
		else if (odd % 2 !== 0) oddIdx += 2;
		else {
			nums[evenIdx] = odd;
			nums[oddIdx] = even;
			evenIdx += 2;
			oddIdx += 2;
		}
	}
	return nums;
};

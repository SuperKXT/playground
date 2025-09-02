export const twoSum = (nums: number[], target: number): [number, number] => {
	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i] as number;
		const match = nums.findIndex((num, j) => i !== j && num + curr === target);
		if (match !== -1) return [i, match];
	}
	throw new Error("No match found!");
};

export const perrinNums = (n: number): number[] => {
	if (n < 0) return [];
	const arr: number[] = [3, 0, 2];
	if (n < 3) return arr.slice(0, n + 1);

	for (let i = 3; i <= n; i++) {
		arr.push((arr[i - 3] as number) + (arr[i - 2] as number));
	}
	return arr;
};

const _perrinCombinations = (
	nums: number[],
	start: number,
	existing: number[] = [],
): number[][] => {
	const combinations: number[][] = [];
	for (let i = start; i < nums.length; i++) {
		const iVal = nums[i] as number;
		combinations.push([...existing, iVal]);
		for (let j = i + 1; j < nums.length; j++) {
			const jVal = nums[j] as number;
			const curr = [...existing, iVal, jVal];
			combinations.push(curr);
			const res = _perrinCombinations(nums, j + 1, curr);
			for (const r of res) combinations.push(r);
		}
	}
	return combinations;
};

export const perrinCombinations = (n: number, target: number): number[][] => {
	const nums = Array.from(new Set(perrinNums(n))).sort((a, b) => a - b);
	const combinations: number[][] = _perrinCombinations(nums, 0);
	const res: number[][] = [];
	for (const combination of combinations) {
		const sum = combination.reduce((concat, b) => concat + b, 0);
		if (sum === target) res.push(combination);
	}
	return res;
};

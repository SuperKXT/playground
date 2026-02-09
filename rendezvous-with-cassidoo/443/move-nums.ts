export const moveNumsImmutable = (nums: number[], n: number): number[] => {
	const res: number[] = [];
	let nCount = 0;
	for (const num of nums) {
		if (num === n) nCount++;
		else res.push(num);
	}
	for (let i = 0; i < nCount; i++) res.push(n);
	return res;
};

export const moveNumsInPlace = (nums: number[], n: number): number[] => {
	let size = nums.length;
	for (let i = 0; i < size; i++) {
		const num = nums[i] as number;
		if (num !== n) continue;
		nums.splice(i, 1);
		nums.push(n);
		size--;
		i--;
	}
	return nums;
};

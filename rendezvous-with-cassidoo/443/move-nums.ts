type TMoveNums<Nums extends number[], N extends number> = Nums extends [
	infer first,
	...infer rest extends number[],
]
	? first extends N
		? [...TMoveNums<rest, N>, first]
		: [first, ...TMoveNums<rest, N>]
	: [];

export const moveNumsImmutable = <
	const Nums extends number[],
	N extends number,
>(
	nums: Nums,
	n: N,
): TMoveNums<Nums, N> => {
	const res: number[] = [];
	let nCount = 0;
	for (const num of nums) {
		if (num === n) nCount++;
		else res.push(num);
	}
	for (let i = 0; i < nCount; i++) res.push(n);
	return res as never;
};

export function moveNumsInPlace(nums: number[], n: number) {
	let size = nums.length;
	for (let i = 0; i < size; i++) {
		const num = nums[i] as number;
		if (num !== n) continue;
		nums.splice(i, 1);
		nums.push(n);
		size--;
		i--;
	}
}

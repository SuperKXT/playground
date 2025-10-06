// https://leetcode.com/problems/minimum-index-sum-of-two-lists

export const minIndexSum = (list1: string[], list2: string[]): string[] => {
	const map2 = new Map<unknown, number>();
	for (let i = 0; i < list2.length; i++) map2.set(list2[i], i);

	let min = Infinity;
	let res: string[] = [];
	for (let i = 0; i < list1.length; i++) {
		const word = list1[i] as string;
		const j = map2.get(word);
		if (j === undefined) continue;
		const sum = i + j;
		if (sum > min) continue;
		if (sum < min) res = [];
		res.push(word);
		min = sum;
	}
	return res as never;
};

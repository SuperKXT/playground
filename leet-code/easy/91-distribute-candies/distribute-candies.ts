// https://leetcode.com/problems/distribute-candies

export const distributeCandies = (candyType: number[]): number => {
	const max = candyType.length / 2;
	const set = new Set<number>();
	for (const type of candyType) {
		set.add(type);
		if (set.size === max) break;
	}
	return set.size;
};

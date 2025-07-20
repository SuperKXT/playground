// https://leetcode.com/problems/jewels-and-stones
export const jewelsStones = (jewels: string, stones: string): number => {
	const set = new Set(jewels.split(""));
	let count = 0;
	for (const stone of stones) {
		if (set.has(stone)) count++;
	}
	return count as never;
};

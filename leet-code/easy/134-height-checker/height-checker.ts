// https://leetcode.com/problems/height-checker

export const heightChecker = (heights: number[]): number => {
	const sorted = heights.toSorted((a, b) => a - b);
	let count = 0;
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== sorted[i]) count++;
	}
	return count;
};

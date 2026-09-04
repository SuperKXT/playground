export const maxProduct = (arr: number[]): number => {
	const sorted = [...arr].sort((a, b) => a - b);
	const last = sorted.length - 1;

	// with the list sorted, the largest product is either the three biggest
	// numbers, or the two most negative ones paired with the biggest number
	const topThree =
		(sorted[last] as number) *
		(sorted[last - 1] as number) *
		(sorted[last - 2] as number);
	const bottomTwo =
		(sorted[0] as number) * (sorted[1] as number) * (sorted[last] as number);

	return Math.max(topThree, bottomTwo);
};

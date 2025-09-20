// https://leetcode.com/problems/summary-ranges

export const summaryRanges = (nums: number[]): string[] => {
	let curr: undefined | { start: number; end: number } = undefined;
	const ranges: string[] = [];
	for (const num of nums) {
		if (!curr || curr.end + 1 !== num) {
			if (curr)
				ranges.push(
					curr.start === curr.end
						? String(curr.start)
						: `${curr.start}->${curr.end}`,
				);
			curr = { start: num, end: num };
		}
		curr.end = num;
	}
	if (curr)
		ranges.push(
			curr.start === curr.end
				? String(curr.start)
				: `${curr.start}->${curr.end}`,
		);
	return ranges;
};

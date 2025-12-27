// https://leetcode.com/problems/positions-of-large-groups

type TCurr = { char: string; start: number };

const checkInterval = (
	curr: TCurr | null,
	end: number,
	intervals: Array<[number, number]>,
): void => {
	if (!curr) return;
	if (end - curr.start >= 2) intervals.push([curr.start, end]);
};

export const largeGroupPositions = (s: string): Array<[number, number]> => {
	const intervals: Array<[number, number]> = [];
	let curr: null | TCurr = null;
	for (let i = 0; i < s.length; i++) {
		const char = s[i] as string;
		// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
		if (curr === null || curr.char !== char) {
			checkInterval(curr, i - 1, intervals);
			curr = { start: i, char };
		}
	}
	checkInterval(curr, s.length - 1, intervals);
	return intervals;
};

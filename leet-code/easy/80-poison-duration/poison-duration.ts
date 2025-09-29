// https://leetcode.com/problems/teemo-attacking

export const poisonDuration = (
	timeSeries: number[],
	duration: number,
): number => {
	let res = 0;
	let lastEnd = 0;
	for (const sec of timeSeries) {
		const end = sec + duration;
		res += duration - Math.max(lastEnd - sec, 0);
		lastEnd = end;
	}
	return res;
};

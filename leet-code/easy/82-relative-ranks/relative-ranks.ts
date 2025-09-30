// https://leetcode.com/problems/relative-ranks

export const relativeRanks = (score: number[]): string[] => {
	const map = new Map<number, number>();
	for (let i = 0; i < score.length; i++) map.set(score[i] as number, i);
	const res: string[] = [];
	score.sort((a, b) => b - a);
	for (let idx = 0; idx < score.length; idx++) {
		const num = score[idx] as number;
		res[map.get(num) as number] =
			idx === 0
				? "Gold Medal"
				: idx === 1
					? "Silver Medal"
					: idx === 2
						? "Bronze Medal"
						: String(idx + 1);
	}
	return res;
};

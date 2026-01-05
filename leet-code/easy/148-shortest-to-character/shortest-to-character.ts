// https://leetcode.com/problems/shortest-distance-to-a-character

export const shortestToChar = (s: string, c: string): number[] => {
	let lastIdx = -1;
	const res: number[] = [];
	for (let i = 0; i < s.length; i++) {
		const char = s[i] as string;
		if (char !== c) continue;
		for (let j = lastIdx + 1; j <= i; j++) {
			const min = Math.min(lastIdx < 0 ? Infinity : j - lastIdx, i - j);
			res.push(min);
		}
		lastIdx = i;
	}
	for (let j = lastIdx + 1; j < s.length; j++) {
		res.push(j - lastIdx);
	}
	return res;
};

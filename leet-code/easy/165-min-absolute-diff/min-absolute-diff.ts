// https://leetcode.com/problems/minimum-absolute-difference

export const minAbsoluteDiff = (arr: number[]): Array<[number, number]> => {
	const sorted = arr.sort((a, b) => a - b);
	const pairs: Array<[number, number]> = [];
	let minDiff = Infinity;
	for (let i = 1; i < sorted.length; i++) {
		const last = sorted[i - 1] as number;
		const curr = sorted[i] as number;
		const diff = Math.abs(curr - last);
		if (diff < minDiff) {
			minDiff = diff;
			pairs.splice(0, pairs.length);
		}
		if (minDiff === diff) {
			pairs.push([last, curr]);
		}
	}
	return pairs;
};

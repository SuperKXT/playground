// https://leetcode.com/problems/di-string-match

export const diStringMatch = (s: string): number[] => {
	let low = 0;
	let high = s.length;
	const res: number[] = [];
	for (const char of s) {
		if (char === "I") {
			res.push(low);
			low++;
		} else {
			res.push(high);
			high--;
		}
	}
	res.push(low);
	return res;
};

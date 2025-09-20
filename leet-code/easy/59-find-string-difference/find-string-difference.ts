// https://leetcode.com/problems/find-the-difference

// export const findStringDifference = (s: string, t: string): string => {
// 	return t.replace(new RegExp(`[${s}]`, "gu"), "");
// };

export const findStringDifference = (s: string, t: string): string => {
	const map = new Map<string, number>();
	for (const char of s) map.set(char, (map.get(char) ?? 0) + 1);
	for (const char of t) {
		const count = map.get(char) ?? 0;
		if (count > 0) map.set(char, count - 1);
		else return char;
	}
	throw new Error("No difference");
};

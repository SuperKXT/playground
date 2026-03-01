// https://leetcode.com/problems/count-binary-substrings

export const countBinarySubstrings = (s: string): number => {
	const counts = { 0: 0, 1: 0 };
	let last: "0" | "1" | null = null;
	let count = 0;
	for (const char of s) {
		if (char !== "0" && char !== "1") throw new Error("invalid string");
		if (last && char !== last) {
			counts[char] = 0;
		}
		counts[char]++;
		if (counts[char] <= counts[char === "0" ? "1" : "0"]) count++;
		last = char;
	}
	return count;
};

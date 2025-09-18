// https://leetcode.com/problems/counting-bits

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] as const;
type TVowels = typeof vowels;
const vowelSet = new Set<string>(vowels);

export const reverseVowels = (s: string): string => {
	let start = 0;
	let end = s.length - 1;
	let toReplace: string | undefined = undefined;
	const res = s.split("");
	while (start < end) {
		if (toReplace) {
			const curr = res[end] as string;
			if (vowelSet.has(curr)) {
				res[start] = curr;
				res[end] = toReplace;
				toReplace = undefined;
				start++;
			}
			end--;
		} else {
			const curr = res[start] as string;
			if (vowelSet.has(curr)) {
				toReplace = curr;
			} else {
				start++;
			}
		}
	}
	return res.join("");
};

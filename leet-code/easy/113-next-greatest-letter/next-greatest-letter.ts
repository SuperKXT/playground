// https://leetcode.com/problems/find-smallest-letter-greater-than-target

export const nextGreatestLetter = (
	letters: [string, ...string[]],
	target: string,
): string => {
	let res: undefined | string = undefined;
	for (const letter of letters) {
		if (letter.localeCompare(target) <= 0) continue;
		if (!res || res.localeCompare(letter) > 0) res = letter;
	}
	if (!res) return letters[0];
	return res;
};

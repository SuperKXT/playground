// https://leetcode.com/problems/buddy-strings

export const buddyStrings = (s: string, goal: string): boolean => {
	if (s.length !== goal.length) return false;
	if (s === goal) return s.length !== new Set(s.split("")).size;
	let first: null | number = null;
	for (let i = 0; i < s.length; i++) {
		const sChar = s[i] as string;
		const goalChar = goal[i] as string;
		if (sChar === goalChar) continue;
		if (first === null) {
			first = i;
		} else {
			const sCheck =
				s.slice(0, first) +
				sChar +
				s.slice(first + 1, i) +
				(s[first] as string) +
				s.slice(i + 1);
			return sCheck === goal;
		}
	}
	return false;
};

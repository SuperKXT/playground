// https://leetcode.com/problems/rotate-string

export const rotateString = (s: string, goal: string): boolean => {
	if (s.length !== goal.length) return false;
	if (s === goal) return true;
	for (let i = s.length - 1; i > 0; i--) {
		const curr = s.slice(i) + s.slice(0, i);
		if (curr === goal) return true;
	}
	return false;
};

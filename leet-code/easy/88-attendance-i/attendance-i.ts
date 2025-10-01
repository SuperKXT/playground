// https://leetcode.com/problems/attendance-i

export const attendance = (s: string): boolean => {
	let absents = 0;
	let consecutiveLate = 0;
	for (const char of s) {
		if (char === "A") absents++;
		if (char === "L") consecutiveLate++;
		else consecutiveLate = 0;
		if (absents === 2) return false;
		if (consecutiveLate === 3) return false;
	}
	return true;
};

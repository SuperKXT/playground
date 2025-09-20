// https://leetcode.com/problems/power-of-three

export const powerOfThree = (n: number): boolean => {
	if (n < 1) return false;
	let curr = 1;
	while (curr <= n) {
		if (curr === n) return true;
		curr *= 3;
	}
	return false;
};

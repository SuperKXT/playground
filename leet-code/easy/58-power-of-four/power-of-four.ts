// https://leetcode.com/problems/power-of-four

// export const powerOfFour = (n: number): boolean => {
// 	if (n < 1) return false;
// 	let curr = 1;
// 	while (curr <= n) {
// 		if (curr === n) return true;
// 		curr *= 4;
// 	}
// 	return false;
// };

export const powerOfFour = (n: number): boolean => {
	if (n < 1) return false;
	const base4 = n.toString(4);
	return /^10*$/u.test(base4);
};

// https://leetcode.com/problems/power-of-two

// export const powerOfTwo = (n: number): boolean => {
// 	if (n < 1) return false;
// 	let curr = 1;
// 	while (curr <= n) {
// 		if (curr === n) return true;
// 		curr *= 2;
// 	}
// 	return false;
// };

export const powerOfTwo = (n: number): boolean => {
	return Number.isInteger(Math.log2(n));
};

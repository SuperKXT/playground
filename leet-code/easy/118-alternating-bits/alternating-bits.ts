// https://leetcode.com/problems/binary-number-with-alternating-bits

// export const alternatingBits = (n: number): boolean => {
// 	let curr = n;
// 	let last: undefined | number;
// 	while (curr > 1) {
// 		const remainder = curr % 2;
// 		if (last === remainder) return false;
// 		last = remainder;
// 		curr = Math.floor(curr / 2);
// 	}
// 	return curr !== last;
// };

export const alternatingBits = (n: number): boolean => {
	const str = n.toString(2);
	let last: undefined | string;
	for (const char of str) {
		if (last === char) return false;
		last = char;
	}
	return true;
};

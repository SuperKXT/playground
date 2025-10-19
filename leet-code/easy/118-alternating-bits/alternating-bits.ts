// https://leetcode.com/problems/binary-number-with-alternating-bits

export const alternatingBits = (n: number): boolean => {
	const str = n.toString(2);
	let last: undefined | string;
	for (const char of str) {
		if (last === char) return false;
		last = char;
	}
	return true;
};

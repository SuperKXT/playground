// https://leetcode.com/problems/1-bit-and-2-bit-characters

export const oneBitChar = (bits: number[]): boolean => {
	let i = bits.length;
	while (i > 1) {
		const curr = bits[bits.length - i];
		i--;
		if (curr === 1) i--;
	}
	return i === 1;
};

// https://leetcode.com/problems/couting-bits

const oneBits = (num: number): number => {
	let curr = num;
	let count = 0;
	while (curr > 0) {
		// eslint-disable-next-line no-bitwise
		curr &= curr - 1;
		count++;
	}
	return count;
};

export const countBits = (n: number): number[] => {
	const res: number[] = [];
	for (let idx = 0; idx <= n; idx++) {
		res.push(oneBits(idx));
	}
	return res;
};

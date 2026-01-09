// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation

// const isPrime = (num: number): boolean => {
// 	if (num < 2 || !Number.isInteger(num)) return false;
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) return false;
// 	}
// 	return true;
// };

const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

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

export const countPrimeSetBits = (left: number, right: number): number => {
	let count = 0;
	for (let i = left; i <= right; i++) {
		if (primeSet.has(oneBits(i))) count++;
	}
	return count;
};

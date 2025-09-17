// https://leetcode.com/problems/number-of-1-bits

// export const oneBits = (num: number): number => {
// 	const str = num.toString(2);
// 	let count = 0;
// 	for (const char of str) {
// 		if (char === "1") count++;
// 	}
// 	return count;
// };

export const oneBits = (num: number): number => {
	let curr = num;
	let count = 0;
	while (curr > 0) {
		// eslint-disable-next-line no-bitwise
		curr &= curr - 1;
		count++;
	}
	return count;
};

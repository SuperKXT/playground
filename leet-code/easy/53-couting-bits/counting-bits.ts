// https://leetcode.com/problems/counting-bits

// const oneBits = (num: number): number => {
// 	let curr = num;
// 	let count = 0;
// 	while (curr > 0) {
// 		// eslint-disable-next-line no-bitwise
// 		curr &= curr - 1;
// 		count++;
// 	}
// 	return count;
// };

// export const countBits = (n: number): number[] => {
// 	const res: number[] = [];
// 	for (let idx = 0; idx <= n; idx++) {
// 		res.push(oneBits(idx));
// 	}
// 	return res;
// };

export const countBits = (n: number): number[] => {
	const res: number[] = [0];
	let sub = 1;
	for (let idx = 1; idx <= n; idx++) {
		if (sub * 2 === idx) sub = idx;
		res.push((res[idx - sub] as number) + 1);
	}
	return res;
};

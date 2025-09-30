// https://leetcode.com/problems/hamming-distance

// export const hammingDistance = (x: number, y: number): number => {
// 	const xStr = x.toString(2);
// 	const yStr = y.toString(2);
// 	const size = Math.max(xStr.length, yStr.length);
// 	let distance = 0;
// 	for (let i = 1; i <= size; i++) {
// 		if ((xStr.at(-i) ?? "0") !== (yStr.at(-i) ?? "0")) distance++;
// 	}
// 	return distance;
// };

export const hammingDistance = (x: number, y: number): number => {
	// eslint-disable-next-line no-bitwise
	let curr = x ^ y;
	let distance = 0;
	while (curr > 0) {
		distance++;
		// eslint-disable-next-line no-bitwise
		curr &= curr - 1;
	}
	return distance;
};

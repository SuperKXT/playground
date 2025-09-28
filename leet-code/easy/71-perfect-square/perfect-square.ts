// https://leetcode.com/problems/valid-perfect-square

// export const perfectSquare = (num: number): boolean => {
// 	const half = Math.ceil(num / 2);
// 	for (let i = 1; i <= half; i++) {
// 		if (i * i === num) return true;
// 		if (i * i > num) return false;
// 	}
// 	return false;
// };

export const perfectSquare = (num: number): boolean => {
	let start = 1;
	let end = Math.ceil(num / 2);
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		const square = mid * mid;
		if (square === num) return true;
		if (square > num) end = mid - 1;
		else start = mid + 1;
	}
	return false;
};

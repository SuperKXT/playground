// https://leetcode.com/problems/sqrtx

export const squareRoot = (x: number): number => {
	if (x === 0) return 0;
	let start = 1;
	let end = x - 1;
	while (start <= end) {
		const mid = Math.trunc((start + end) / 2);
		const square = mid * mid;
		if (square === x) return mid;
		if (square < x) {
			const next = mid + 1;
			const nextSquare = next * next;
			if (nextSquare > x) return mid;
			start = next;
		} else {
			const next = mid - 1;
			const nextSquare = next * next;
			if (nextSquare < x) return next;
			end = next;
		}
	}
	return start;
};

// https://leetcode.com/problems/fibonacci-number

export const fibonacciNumber = (n: number): number => {
	if (n < 0 || !Number.isInteger(n))
		throw new Error("Must be a non-negative integer");
	if (n === 0) return 0;
	if (n === 1) return 1;
	let prev = 0;
	let curr = 1;
	for (let i = 2; i <= n; i++) {
		const next = prev + curr;
		prev = curr;
		curr = next;
	}
	return curr;
};

export const hyperFactorial = (num: number): bigint => {
	if (num < 0 || !Number.isInteger(num))
		throw new Error("Number must be a positive integer");
	let res = 1n;
	for (let i = 1n; i <= num; i++) res *= i ** i;
	return res;
};

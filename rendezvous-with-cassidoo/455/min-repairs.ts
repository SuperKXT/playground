const gcd = (a: number, b: number): number => {
	return b === 0 ? a : gcd(b, a % b);
};

export const longestCoPrimeSubsequence = (arr: number[]): number => {
	let count = 0;
	let last = null as null | number;
	for (const num of arr) {
		if (last === null) {
			last = num;
			count++;
		} else if (gcd(last, num) === 1) {
			last = num;
			count++;
		}
	}
	return count;
};

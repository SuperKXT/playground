// https://leetcode.com/problems/happy-number

export const happyNumber = (num: number): boolean => {
	const set = new Set<number>();
	let curr = num;
	while (curr) {
		if (curr === 1) return true;
		if (set.has(curr)) break;
		set.add(curr);
		const digits = curr.toString().split("");
		let sum = 0;
		for (const digit of digits) {
			sum += parseInt(digit) ** 2;
		}
		curr = sum;
	}
	return false;
};

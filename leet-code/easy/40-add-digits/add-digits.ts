// https://leetcode.com/problems/add-digits

export const addDigits = (num: number): number => {
	let curr = num;
	while (curr > 9) {
		const digits = curr.toString().split("");
		let sum = 0;
		for (const digit of digits) {
			sum += parseInt(digit);
		}
		curr = sum;
	}
	return curr;
};

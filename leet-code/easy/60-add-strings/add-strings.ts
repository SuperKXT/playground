// https://leetcode.com/problems/add-strings

export const addStrings = (num1: string, num2: string): string => {
	const size = Math.max(num1.length, num2.length);
	let carry = 0;
	let res = "";
	for (let i = 1; i <= size; i++) {
		const digit1 = Number(num1[num1.length - i] ?? "0");
		const digit2 = Number(num2[num2.length - i] ?? "0");
		const sum = digit1 + digit2 + carry;
		carry = sum > 9 ? 1 : 0;
		res = `${sum % 10}${res}`;
	}
	if (carry) res = `${carry}${res}`;
	return res;
};

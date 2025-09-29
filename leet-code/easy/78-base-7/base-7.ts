// https://leetcode.com/problems/base-7

export const base7 = (num: number): string => {
	if (!Number.isInteger(num)) throw new Error("Number must be an integer");

	let res = "";
	const negative = num < 0;
	let curr = Math.abs(num);
	while (true) {
		const digit = curr % 7;
		res = `${digit}${res}`;
		if (curr < 7) break;
		curr = Math.floor(curr / 7);
	}
	if (negative) return `-${res}`;
	return res;
};

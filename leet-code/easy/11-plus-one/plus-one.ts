// export const plusOne = (digits: number[]): number[] => {
// 	const last = digits.at(-1);
// 	if (last === undefined) return [1];
// 	const rest = digits.slice(0, -1);
// 	if (last === 9) return [...plusOne(rest), 0];
// 	return [...rest, last + 1];
// };

export const plusOne = (
	digits: number[],
	idx: number = digits.length - 1,
): number[] => {
	const curr = digits[idx];
	if (curr === undefined) {
		digits.unshift(1);
		return digits;
	}
	if (curr === 9) {
		digits[idx] = 0;
		return plusOne(digits, idx - 1);
	}
	digits[idx] = curr + 1;
	return digits;
};

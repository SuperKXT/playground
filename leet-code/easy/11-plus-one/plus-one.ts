// https://leetcode.com/problems/plus-one/description

type TDigitMap = {
	0: 1;
	1: 2;
	2: 3;
	3: 4;
	4: 5;
	5: 6;
	6: 7;
	7: 8;
	8: 9;
	9: 0;
};

export type TPlusOne<
	Nums extends number[],
	visited extends number[] = [],
> = Nums extends [
	...infer rest extends number[],
	infer last extends keyof TDigitMap,
]
	? last extends 9
		? TPlusOne<rest, [TDigitMap[last], ...visited]>
		: [...rest, TDigitMap[last], ...visited]
	: [1, ...visited];

// export const plusOne = <const Nums extends number[]>(
// 	digits: Nums,
// ): TPlusOne<Nums> => {
// 	const last = digits.at(-1);
// 	if (last === undefined) return [1] as never;
// 	const rest = digits.slice(0, -1);
// 	if (last === 9) return [...plusOne(rest), 0] as never;
// 	return [...rest, last + 1] as never;
// };

// export const plusOne = <const Nums extends number[]>(
// 	digits: Nums,
// 	idx: number = digits.length - 1,
// ): TPlusOne<Nums> => {
// 	const curr = digits[idx];
// 	if (curr === undefined) {
// 		digits.unshift(1);
// 		return digits as never;
// 	}
// 	if (curr === 9) {
// 		digits[idx] = 0;
// 		return plusOne(digits, idx - 1) as never;
// 	}
// 	digits[idx] = curr + 1;
// 	return digits as never;
// };

export const plusOne = <const Nums extends number[]>(
	digits: Nums,
): TPlusOne<Nums> => {
	for (let i = digits.length - 1; i >= 0; i--) {
		const curr = digits[i] as number;
		if (curr < 9) {
			digits[i] = curr + 1;
			return digits as never;
		}
		digits[i] = 0;
	}
	digits.unshift(1);
	return digits as never;
};

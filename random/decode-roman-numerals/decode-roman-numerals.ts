import type { Sum } from "../../type-challenges/extreme/6-sum.js";

const numerals = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
} as const;

const subtractiveNumerals = {
	IV: 4,
	IX: 9,
	XL: 40,
	XC: 90,
	CD: 400,
	CM: 900,
} as const;

type TDecodeRomanNumerals<
	Str extends string,
	res extends number = 0,
> = string extends Str
	? number
	: Str extends `${infer first}${infer second}${infer rest}`
		? `${first}${second}` extends infer key extends
				keyof typeof subtractiveNumerals
			? TDecodeRomanNumerals<rest, Sum<res, (typeof subtractiveNumerals)[key]>>
			: first extends infer key extends keyof typeof numerals
				? TDecodeRomanNumerals<
						`${second}${rest}`,
						Sum<res, (typeof numerals)[key]>
					>
				: never
		: Str extends `${infer first}${infer rest}`
			? first extends infer key extends keyof typeof numerals
				? TDecodeRomanNumerals<rest, Sum<res, (typeof numerals)[key]>>
				: never
			: Str extends ""
				? res
				: never;

export const decodeRomanNumerals = <Str extends string>(
	val: Str,
): TDecodeRomanNumerals<Str> => {
	let res: number = 0;

	let currStr = val as string;
	while (currStr !== "") {
		const firstTwo = currStr.slice(0, 2);
		const firstTwoVal = (subtractiveNumerals as Record<string, number>)[
			firstTwo
		];
		const first = currStr.slice(0, 1);
		const firstVal = (numerals as Record<string, number>)[first];

		if (firstTwoVal) {
			currStr = currStr.slice(2);
			res += firstTwoVal;
		} else if (firstVal) {
			currStr = currStr.slice(1);
			res += firstVal;
		} else throw new Error(`Invalid input`);
	}

	return res as never;
};

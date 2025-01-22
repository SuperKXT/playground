type TDigitOpts = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type TTuple<
	size extends number,
	res extends unknown[] = [],
> = res["length"] extends size ? res : TTuple<size, [...res, 1]>;

type TShift<arr extends number[]> = arr extends [
	unknown,
	...infer rest extends number[],
]
	? rest
	: never;

type TNumberToTuple<
	num extends number,
	numString extends string = `${num}`,
	res extends number[] = [],
> = numString extends `${infer first extends number}${infer last}`
	? TNumberToTuple<num, last, [...res, first]>
	: res;

type TGreaterThanDigits<
	numA extends number[],
	numB extends number[],
	tupleA extends number[] = TTuple<numA[0]>,
	tupleB extends number[] = TTuple<numB[0]>,
> = numA["length"] extends 0
	? false
	: numA[0] extends numB[0]
		? TGreaterThanDigits<TShift<numA>, TShift<numB>>
		: tupleB[tupleA["length"]] extends undefined
			? true
			: false;

type TGreaterThan<
	T extends number,
	U extends number,
	TA extends number[] = TNumberToTuple<T>,
	UA extends number[] = TNumberToTuple<U>,
> = T extends U
	? false
	: TA["length"] extends UA["length"]
		? TGreaterThanDigits<TA, UA>
		: UA[TA["length"]] extends undefined
			? true
			: false;

type TRemoveDigit<
	num extends number,
	digit extends TDigitOpts,
	numStr extends string = `${num}`,
	prevStr extends string = "",
	max extends number = 0,
> = numStr extends `${infer first extends number}${infer rest}`
	? [first, `${prevStr}${rest}`] extends [
			digit,
			`${infer currNum extends number}`,
		]
		? TRemoveDigit<
				num,
				digit,
				rest,
				`${prevStr}${first}`,
				TGreaterThan<currNum, max> extends true ? currNum : max
			>
		: TRemoveDigit<num, digit, rest, `${prevStr}${first}`, max>
	: max;

export const removeDigit = <num extends number, digit extends TDigitOpts>(
	num: num,
	digit: digit,
): TRemoveDigit<num, digit> => {
	let maxProduct = 0;
	const numStr = num.toString();
	for (let idx = 0; idx < numStr.length; idx++) {
		const curr = numStr[idx] as string;
		if (curr === digit.toString()) {
			const currNum = Number(`${numStr.slice(0, idx)}${numStr.slice(idx + 1)}`);
			maxProduct = Math.max(maxProduct, currNum);
		}
	}
	return maxProduct as never;
};

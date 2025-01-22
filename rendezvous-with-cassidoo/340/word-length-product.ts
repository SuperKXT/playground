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

type TTuple<
	size extends number,
	res extends unknown[] = [],
> = res["length"] extends size ? res : TTuple<size, [...res, 1]>;

type TStringTuple<str extends string> =
	str extends `${infer first}${infer rest}`
		? [first, ...TStringTuple<rest>]
		: [];

type TMultiply<
	numA extends number,
	numB extends number,
	idx extends unknown[] = [],
	res extends unknown[] = [],
> = idx["length"] extends numB
	? res["length"]
	: TMultiply<numA, numB, [...idx, 1], [...res, ...TTuple<numA>]>;

type TNextMax<
	strA extends string,
	strB extends string,
	currMax extends number,
	charsA extends string = TStringTuple<strA>[number],
> = true extends (charsA extends TStringTuple<strB>[number] ? true : false)
	? currMax
	: TMultiply<
				TStringTuple<strA>["length"],
				TStringTuple<strB>["length"]
		  > extends infer product extends number
		? TGreaterThan<product, currMax> extends true
			? product
			: currMax
		: currMax;

type TMaxProductForWord<
	word extends string,
	arr extends string[],
	currMax extends number = 0,
> = arr extends [infer first extends string, ...infer rest extends string[]]
	? TMaxProductForWord<word, rest, TNextMax<word, first, currMax>>
	: currMax;

type TWordLengthProduct<
	arr extends string[],
	maxProduct extends number = 0,
	idx extends unknown[] = [],
> = idx["length"] extends arr["length"]
	? maxProduct
	: TWordLengthProduct<
			arr,
			TMaxProductForWord<arr[idx["length"]], arr, maxProduct>,
			[...idx, 1]
		>;

export const wordLengthProduct = <const Arr extends string[]>(
	arr: Arr,
): TWordLengthProduct<Arr> => {
	let maxProduct: number = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			const iVal = arr[i] as string;
			const jVal = arr[j] as string;
			const combined = iVal + jVal;
			const currProduct = iVal.length * jVal.length;
			const iSize = new Set(iVal).size;
			const jSize = new Set(jVal).size;
			const ijSize = new Set(combined).size;
			if (iSize + jSize === ijSize && currProduct > maxProduct)
				maxProduct = currProduct;
		}
	}
	return maxProduct as never;
};

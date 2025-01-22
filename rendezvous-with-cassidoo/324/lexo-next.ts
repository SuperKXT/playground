type TDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type TTuple<
	size extends number,
	tup extends 1[] = [],
> = tup["length"] extends size ? tup : TTuple<size, [...tup, 1]>;

type TNumToTuple<num extends number> = `${num}` extends `${infer first extends
	TDigit}${infer rest extends number}`
	? [first, ...TNumToTuple<rest>]
	: num extends TDigit
		? [num]
		: [];

type TTupleToString<T extends TDigit[]> = T extends [
	infer first extends TDigit,
	...infer rest extends TDigit[],
]
	? `${first}${TTupleToString<rest>}`
	: "";

type TTupleToNum<T extends TDigit[]> =
	`${TTupleToString<T>}` extends `${infer num extends number}` ? num : never;
type TShift<T extends number[]> = T extends [
	unknown,
	...infer R extends number[],
]
	? R
	: never;

type TLessThanDigits<
	T extends number[],
	U extends number[],
	TF extends number[] = TTuple<T[0]>,
	UF extends number[] = TTuple<U[0]>,
> = T["length"] extends 0
	? false
	: T[0] extends U[0]
		? TLessThanDigits<TShift<T>, TShift<U>>
		: TF[UF["length"]] extends undefined
			? true
			: false;

type TLessThan<
	T extends number,
	U extends number,
	TA extends number[] = TNumToTuple<T>,
	UA extends number[] = TNumToTuple<U>,
> = T extends U
	? false
	: TA["length"] extends UA["length"]
		? TLessThanDigits<TA, UA>
		: TA[UA["length"]] extends undefined
			? true
			: false;

export type TLexoNext<
	num extends number,
	tup extends TDigit[] = TNumToTuple<num>,
	res extends TDigit[] = [],
> = tup extends [
	...infer rest extends TDigit[],
	infer last extends TDigit,
	infer curr extends TDigit,
]
	? TLessThan<last, curr> extends true
		? TTupleToNum<[...rest, curr, last, ...res]>
		: TLexoNext<never, rest, [last, curr, ...res]>
	: TTupleToNum<[...tup, ...res]>;

export const lexoNext = <Num extends number>(num: Num): TLexoNext<Num> => {
	const digitArray = num.toString().split("");
	for (let i = digitArray.length - 1; i > 0; i--) {
		const curr = parseInt(digitArray[i] as string);
		const last = parseInt(digitArray[i - 1] as string);
		if (last < curr) {
			digitArray[i] = last.toString();
			digitArray[i - 1] = curr.toString();
			break;
		}
	}
	return Number(digitArray.join("")) as never;
};

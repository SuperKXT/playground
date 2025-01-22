type TTuple<
	size extends number,
	res extends 1[] = [],
> = res["length"] extends size ? res : TTuple<size, [...res, 1]>;

type TShift<tup extends number[]> = tup extends [
	unknown,
	...infer rest extends number[],
]
	? rest
	: never;

type TNumberToTuple<
	T extends number,
	R extends string = `${T}`,
	A extends number[] = [],
> = R extends `${infer F extends number}${infer L}`
	? TNumberToTuple<T, L, [...A, F]>
	: A;

type TGreaterThanDigits<
	T extends number[],
	U extends number[],
	TF extends number[] = TTuple<T[0]>,
	UF extends number[] = TTuple<U[0]>,
> = T["length"] extends 0
	? false
	: T[0] extends U[0]
		? TGreaterThanDigits<TShift<T>, TShift<U>>
		: UF[TF["length"]] extends undefined
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

type TRotatedArray<
	input extends number[],
	idx extends 1[] = [],
	rotated extends 1[] = [],
> = [...idx, 1]["length"] extends input["length"]
	? rotated["length"]
	: TGreaterThan<
				input[idx["length"]],
				input[[...idx, 1]["length"]]
		  > extends true
		? input extends [infer first extends number, ...infer rest extends number[]]
			? TRotatedArray<[...rest, first], [], [...rotated, 1]>
			: never
		: TRotatedArray<input, [...idx, 1], rotated>;

export const rotatedArray = <const Input extends number[]>(
	input: Input,
): TRotatedArray<Input> => {
	const array = [...input];
	let rotated = 0;
	let idx = 0;
	while (idx < array.length - 1) {
		const curr = array[idx] as number;
		const next = array[idx + 1] as number;
		if (curr > next) {
			idx = 0;
			const removed = array.splice(0, 1);
			array.push(...removed);
			rotated++;
		} else {
			idx++;
		}
	}
	return rotated as never;
};

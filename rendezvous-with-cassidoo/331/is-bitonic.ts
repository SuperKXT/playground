type TTuple<T extends number, A extends 1[] = []> = A["length"] extends T
	? A
	: TTuple<T, [...A, 1]>;

type TShift<tup extends number[]> = tup extends [
	unknown,
	...infer rest extends number[],
]
	? rest
	: never;

type TNumberToTuple<
	num extends number,
	str extends string = `${num}`,
	result extends number[] = [],
> = str extends `${infer F extends number}${infer L}`
	? TNumberToTuple<num, L, [...result, F]>
	: result;

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

type TLessThan<T extends number, U extends number> = T extends U
	? false
	: TGreaterThan<T, U> extends true
		? false
		: true;

type TIsBitonic<
	input extends number[],
	increased extends boolean = false,
	peak extends number = never,
	idx extends 1[] = [],
	curr extends number = input[idx["length"]],
	next extends number = input[[...idx, 1]["length"]],
> = next extends undefined
	? [peak] extends [never]
		? false
		: increased extends false
			? false
			: peak
	: TGreaterThan<curr, next> extends true
		? increased extends false
			? false
			: TIsBitonic<
					input,
					increased,
					[peak] extends [never] ? curr : peak,
					[...idx, 1]
				>
		: TLessThan<curr, next> extends true
			? [peak] extends [never]
				? TIsBitonic<input, true, peak, [...idx, 1]>
				: false
			: TIsBitonic<input, increased, peak, [...idx, 1]>;

export const isBitonic = <const Input extends number[]>(
	input: Input,
): TIsBitonic<Input> => {
	let increased = false;
	let peak: number | undefined = undefined;
	for (let i = 0; i < input.length - 1; i++) {
		const curr = input[i] as number;
		const next = input[i + 1] as number;
		if (curr > next) {
			if (!increased) return false as never;
			if (!peak) peak = curr;
		} else if (curr < next) {
			increased = true;
			if (peak) return false as never;
		}
	}
	if (!increased || !peak) return false as never;
	return peak as never;
};

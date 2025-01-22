type TFill<T extends number, A extends number[] = []> = A["length"] extends T
	? A
	: TFill<T, [...A, 1]>;

type TShift<T extends number[]> = T extends [
	unknown,
	...infer R extends number[],
]
	? R
	: never;

type TNumberToArray<
	T extends number,
	R extends string = `${T}`,
	A extends number[] = [],
> = R extends `${infer F extends number}${infer L}`
	? TNumberToArray<T, L, [...A, F]>
	: A;

type TGreaterThanDigits<
	T extends number[],
	U extends number[],
	TF extends number[] = TFill<T[0]>,
	UF extends number[] = TFill<U[0]>,
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
	TA extends number[] = TNumberToArray<T>,
	UA extends number[] = TNumberToArray<U>,
> = T extends U
	? false
	: TA["length"] extends UA["length"]
		? TGreaterThanDigits<TA, UA>
		: UA[TA["length"]] extends undefined
			? true
			: false;

type TSeeBuildings<
	Buildings extends number[],
	count extends 1[] = [],
	countWithCurr extends 1[] = [...count, 1],
> = Buildings extends [
	infer curr extends number,
	infer next extends number,
	...infer rest extends number[],
]
	? TGreaterThan<curr, next> extends true
		? countWithCurr["length"]
		: TSeeBuildings<[next, ...rest], countWithCurr>
	: Buildings extends []
		? count["length"]
		: countWithCurr["length"];

export const seeBuildings = <const Buildings extends [number, ...number[]]>(
	buildings: Buildings,
): TSeeBuildings<Buildings> => {
	let count = 0;
	for (let idx = 0; idx < buildings.length; idx++) {
		const curr = buildings[idx] as number;
		const next = buildings[idx + 1] ?? Infinity;
		count++;
		if (next < curr) break;
	}
	return count as never;
};

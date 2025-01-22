type TAreDigitsUnique<
	num extends number,
	str extends string = `${num}`,
> = str extends `${infer first}${infer rest}`
	? rest extends `${string}${first}${string}`
		? false
		: TAreDigitsUnique<never, rest>
	: true;

type TTuple<
	size extends number,
	res extends unknown[] = [],
> = res["length"] extends size ? res : TTuple<size, [...res, 1]>;

type TUniqueSum<
	arr extends number[],
	sum extends unknown[] = [],
> = arr extends [infer first extends number, ...infer rest extends number[]]
	? TUniqueSum<
			rest,
			TAreDigitsUnique<first> extends true ? [...sum, ...TTuple<first>] : sum
		>
	: sum["length"];

export const uniqueSum = <const Arr extends number[]>(
	arr: Arr,
): TUniqueSum<Arr> => {
	let sum = 0;
	for (const num of arr) {
		const uniqueDigits = new Set(num.toString().split(""));
		if (uniqueDigits.size !== num.toString().length) continue;
		sum += num;
	}
	return sum as never;
};

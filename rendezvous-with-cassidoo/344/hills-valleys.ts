type TTuple<
	size extends number,
	res extends unknown[] = [],
> = res["length"] extends size ? res : TTuple<size, [...res, 1]>;

type TNumberToTuple<
	num extends number,
	str extends string = `${num}`,
	res extends number[] = [],
> = str extends `${infer curr extends number}${infer rest}`
	? TNumberToTuple<never, rest, [...res, curr]>
	: res;

type TCompareDigits<
	digitA extends number,
	digitB extends number,
	tupA extends unknown[] = TTuple<digitA>,
	tupB extends unknown[] = TTuple<digitB>,
> = digitA extends digitB
	? "equal"
	: tupA[tupB["length"]] extends 1
		? "greater"
		: "lesser";

type TCompareNumbers<
	numA extends number,
	numB extends number,
	tupA extends number[] = TNumberToTuple<numA>,
	tupB extends number[] = TNumberToTuple<numB>,
> = numA extends numB
	? "equal"
	: tupA["length"] extends tupB["length"]
		? [tupA, tupB] extends [
				[infer firstA extends number, ...infer restA extends number[]],
				[infer firstB extends number, ...infer restB extends number[]],
			]
			? TCompareDigits<firstA, firstB> extends infer res
				? res extends "equal"
					? TCompareNumbers<never, never, restA, restB>
					: res
				: never
			: never
		: tupA[tupB["length"]] extends number
			? "greater"
			: "lesser";

type TValleys<
	arr extends readonly number[],
	count extends unknown[] = [],
	downhill extends boolean = false,
> = arr extends readonly [
	infer curr extends number,
	infer next extends number,
	...infer rest extends number[],
]
	? TCompareNumbers<curr, next> extends infer res
		? TValleys<
				[next, ...rest],
				[res, downhill] extends ["lesser", true] ? [...count, 1] : count,
				res extends "greater" ? true : downhill
			>
		: never
	: count["length"];

type THills<
	arr extends readonly number[],
	count extends unknown[] = [],
	uphill extends boolean = false,
> = arr extends readonly [
	infer curr extends number,
	infer next extends number,
	...infer rest extends number[],
]
	? TCompareNumbers<curr, next> extends infer res
		? THills<
				[next, ...rest],
				[res, uphill] extends ["greater", true] ? [...count, 1] : count,
				res extends "lesser" ? true : uphill
			>
		: never
	: count["length"];

export const hills = <const arr extends readonly number[]>(
	arr: arr,
): THills<arr> => {
	let count = 0;
	let uphill = false;
	for (let i = 0; i < arr.length - 1; i++) {
		const curr = arr[i] as number;
		const next = arr[i + 1] as number;
		uphill ||= curr < next;
		if (curr > next && uphill) {
			count++;
			uphill = false;
		}
	}
	return count as never;
};

export const valleys = <const arr extends readonly number[]>(
	arr: arr,
): TValleys<arr> => {
	let count = 0;
	let downhill = false;
	for (let i = 0; i < arr.length - 1; i++) {
		const curr = arr[i] as number;
		const next = arr[i + 1] as number;
		downhill ||= curr > next;
		if (curr < next && downhill) {
			count++;
			downhill = false;
		}
	}
	return count as never;
};

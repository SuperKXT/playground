/* eslint-disable no-param-reassign */
type TTask = { name: string; duration: number };

type TTuple<
	size extends number,
	tup extends 1[] = [],
> = tup["length"] extends size ? tup : TTuple<size, [...tup, 1]>;

type TNumberToTuple<
	T extends number,
	R extends string = `${T}`,
	A extends number[] = [],
> = R extends `${infer F extends number}${infer L}`
	? TNumberToTuple<T, L, [...A, F]>
	: A;

type TRemoveFromTuple<
	tup extends unknown[],
	toRemove extends number,
	idx extends 1[] = [],
> = idx["length"] extends toRemove
	? tup
	: tup extends [unknown, ...infer rest]
		? TRemoveFromTuple<rest, toRemove, [...idx, 1]>
		: [];

type TGreaterThanDigits<
	T extends number[],
	U extends number[],
	TF extends number[] = TTuple<T[0]>,
	UF extends number[] = TTuple<U[0]>,
> = T["length"] extends 0
	? false
	: T[0] extends U[0]
		? TGreaterThanDigits<TRemoveFromTuple<T, 1>, TRemoveFromTuple<U, 1>>
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

type TIncludes<tup extends unknown[], val> = tup extends [
	infer first,
	...infer rest,
]
	? first extends val
		? true
		: TIncludes<rest, val>
	: false;

type TMinDurationTask<
	tasks extends readonly TTask[],
	names extends string[],
	min extends TTask | undefined = undefined,
> = tasks extends readonly [
	infer first extends TTask,
	...infer rest extends TTask[],
]
	? TIncludes<names, first["name"]> extends true
		? TMinDurationTask<rest, names, min>
		: TMinDurationTask<
				rest,
				names,
				min extends TTask
					? TGreaterThan<min["duration"], first["duration"]> extends false
						? min
						: first
					: first
			>
	: min;

type TSortNames<
	tasks extends readonly TTask[],
	names extends string[],
> = tasks extends readonly [
	infer first extends TTask,
	...infer rest extends TTask[],
]
	? TIncludes<names, first["name"]> extends true
		? [first["name"], ...TSortNames<rest, names>]
		: TSortNames<rest, names>
	: [];

type TDoWork<
	tasks extends readonly TTask[],
	time extends number,
	timeTup extends 1[] = TTuple<time>,
	names extends string[] = [],
	minTask extends TTask | undefined = TMinDurationTask<tasks, names>,
> = timeTup extends []
	? TSortNames<tasks, names>
	: minTask extends TTask
		? TDoWork<
				tasks,
				time,
				TRemoveFromTuple<timeTup, minTask["duration"]>,
				[...names, minTask["name"]]
			>
		: TSortNames<tasks, names>;

export const doWork = <
	const Tasks extends readonly TTask[],
	Time extends number,
>(
	tasks: Tasks,
	time: Time,
): TDoWork<Tasks, Time> => {
	const names: string[] = [];
	if (!tasks.length) return [] as never;
	while (time > 0) {
		const current = tasks.reduce((min, curr) =>
			min.duration < curr.duration ? min : curr,
		);
		if (time < current.duration) break;
		time = (time - current.duration) as never;
		current.duration = Infinity;
		names[tasks.indexOf(current)] = current.name;
	}
	return names.filter(Boolean) as never;
};

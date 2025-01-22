type TTuple<T extends number, R extends unknown[] = []> = R["length"] extends T
	? R
	: TTuple<T, [...R, unknown]>;

type TTrimArray<
	Arr extends readonly number[],
	Start extends number,
	End extends number,
> = Arr extends readonly [...TTuple<Start>, ...infer Rest, ...TTuple<End>]
	? Rest
	: [];

export const trimArray = <
	const Arr extends readonly number[],
	Start extends number,
	End extends number,
>(
	array: Arr,
	start: Start,
	end: End,
): TTrimArray<Arr, Start, End> => {
	return array.slice(start, array.length - end) as never;
};

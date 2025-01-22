/* eslint-disable no-param-reassign */
type TTuple<
	Len extends number,
	tup extends 1[] = [],
> = tup["length"] extends Len ? tup : TTuple<Len, [...tup, 1]>;

type TStringToTuple<T extends string> = T extends `${infer first}${infer rest}`
	? [first, ...TStringToTuple<rest>]
	: [];

type TRemoveOne<T extends unknown[]> = T extends [unknown, ...infer rest]
	? rest
	: [];

export type TKPal<
	str extends string,
	canRemove extends number,
	strTup extends string[] = TStringToTuple<str>,
	removeTup extends 1[] = TTuple<canRemove>,
> = strTup extends [
	infer first extends string,
	...infer rest extends string[],
	infer last extends string,
]
	? first extends last
		? TKPal<never, never, rest, removeTup>
		: removeTup["length"] extends 0
			? false
			: TKPal<never, never, [...rest, last], TRemoveOne<removeTup>>
	: true;

export const kPal = <Str extends string, CanRemove extends number>(
	str: Str,
	canRemove: CanRemove,
): TKPal<Str, CanRemove> => {
	while (str.length > 1) {
		const first = str.at(0) as string;
		const last = str.at(-1) as string;
		if (first === last) {
			str = str.substring(1, str.length - 1) as Str;
			continue;
		} else if (!canRemove) {
			return false as never;
		}
		canRemove--;
		str = str.substring(1) as Str;
	}
	return true as never;
};

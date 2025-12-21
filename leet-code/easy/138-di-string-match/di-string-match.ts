// https://leetcode.com/problems/di-string-match

type TStringToTuple<S extends string> = S extends `${infer first}${infer rest}`
	? [first, ...TStringToTuple<rest>]
	: [];

type TRemoveOne<T extends unknown[]> = T extends [unknown, ...infer rest]
	? rest
	: [];

type TDiStringMatch<
	S extends string,
	low extends unknown[] = [],
	high extends unknown[] = TStringToTuple<S>,
	res extends number[] = [],
> = S extends `${infer first}${infer rest}`
	? first extends "I"
		? TDiStringMatch<rest, [...low, 1], high, [...res, low["length"]]>
		: TDiStringMatch<rest, low, TRemoveOne<high>, [...res, high["length"]]>
	: [...res, low["length"]];

export const diStringMatch = <S extends string>(s: S): TDiStringMatch<S> => {
	let low = 0;
	let high = s.length;
	const res: number[] = [];
	for (const char of s) {
		if (char === "I") {
			res.push(low);
			low++;
		} else {
			res.push(high);
			high--;
		}
	}
	res.push(low);
	return res as never;
};

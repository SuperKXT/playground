// https://leetcode.com/problems/shortest-completing-word

import type { Utils } from "../../../types/utils.types.js";

type TIsLetter<T extends string> =
	Lowercase<T> extends Uppercase<T> ? false : true;

type TBuildMap<
	Char extends string,
	Map extends Record<string, Array<1>>,
> = Char extends keyof Map
	? Utils.prettify<Omit<Map, Char> & Record<Char, [...Map[Char], 1]>>
	: Map & Record<Char, [1]>;

type TGetMap<
	Str extends string,
	map extends Record<string, Array<1>> = {},
> = Str extends `${infer first}${infer rest}`
	? TIsLetter<first> extends true
		? TGetMap<rest, TBuildMap<Lowercase<first>, map>>
		: TGetMap<rest, map>
	: map;

type TIsSmaller<
	Str extends string,
	Smallest extends string,
> = Smallest extends `${string}${infer smallestRest}`
	? Str extends `${string}${infer rest}`
		? TIsSmaller<rest, smallestRest>
		: true
	: false;

type TCheckWord<
	Word extends string,
	Map extends Record<string, Array<1>>,
	curr extends Record<string, Array<1>> = {},
> = [curr, Map] extends [Map, curr]
	? true
	: Word extends `${infer first}${infer rest}`
		? first extends keyof Map
			? curr[first] extends Map[first]
				? TCheckWord<rest, Map, curr>
				: TCheckWord<rest, Map, TBuildMap<first, curr>>
			: TCheckWord<rest, Map, curr>
		: false;

type TShortestCompletingWord<
	LicensePlate extends string,
	Words extends string[],
	map extends Record<string, Array<1>> = TGetMap<LicensePlate>,
	smallest extends string = never,
> = Words extends [infer first extends string, ...infer rest extends string[]]
	? TCheckWord<first, map> extends true
		? TIsSmaller<first, smallest> extends true
			? TShortestCompletingWord<never, rest, map, first>
			: TShortestCompletingWord<never, rest, map, smallest>
		: TShortestCompletingWord<never, rest, map, smallest>
	: smallest;

export const shortestCompletingWord = <
	LicensePlate extends string,
	const Words extends string[],
>(
	licensePlate: LicensePlate,
	words: Words,
): TShortestCompletingWord<LicensePlate, Words> => {
	const map = new Map<string, number>();
	for (const curr of licensePlate) {
		const char = curr.toLowerCase();
		const code = char.charCodeAt(0);
		const isLetter = code >= 97 && code <= 122;
		if (!isLetter) continue;
		map.set(char, (map.get(char) ?? 0) + 1);
	}
	const sorted = words.toSorted((a, b) => a.length - b.length);
	for (const word of sorted) {
		const currMap = new Map(map);
		for (const curr of word) {
			const char = curr.toLowerCase();
			const existing = currMap.get(char);
			if (!existing) continue;
			if (existing === 1) currMap.delete(char);
			else currMap.set(char, existing - 1);
			if (currMap.size === 0) return word as never;
		}
	}
	throw new Error("No completing word found");
};

// https://leetcode.com/problems/first-unique-character-in-a-string/

type TFirstUniqueChar<
	Str extends string,
	idx extends 1[] = [],
	visited extends string = never,
> = Str extends `${infer first}${infer rest}`
	? rest extends `${string}${first}${string}`
		? TFirstUniqueChar<rest, [...idx, 1], visited | first>
		: first extends visited
			? TFirstUniqueChar<rest, [...idx, 1], visited>
			: idx["length"]
	: -1;

// export const firstUniqueChar = <const Str extends string>(
// 	str: Str,
// ): TFirstUniqueChar<Str> => {
// 	const set = new Set<string>();
// 	const map = new Map<string, number>();
// 	for (let idx = 0; idx < str.length; idx++) {
// 		const char = str[idx] as string;
// 		if (set.has(char)) map.delete(char);
// 		else map.set(char, idx);
// 		set.add(char);
// 	}
// 	return (map.values().next().value ?? -1) as never;
// };

export const firstUniqueChar = <const Str extends string>(
	str: Str,
): TFirstUniqueChar<Str> => {
	const map = new Map<string, number[]>();
	for (let idx = 0; idx < str.length; idx++) {
		const char = str[idx] as string;
		const existing = map.get(char);
		if (!existing) map.set(char, [idx]);
		else existing.push(idx);
	}
	for (const indexes of map.values()) {
		if (indexes.length === 1) return indexes[0] as never;
	}
	return -1 as never;
};

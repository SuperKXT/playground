type TFirstUniqueChar<
	Str extends string,
	idx extends 1[] = [],
> = Str extends `${infer first}${infer rest}`
	? rest extends `${infer before}${first}${infer after}`
		? TFirstUniqueChar<`${before}${after}`, [...idx, 1]>
		: idx["length"]
	: -1;

export const firstUniqueChar = <const Str extends string>(
	str: Str,
): TFirstUniqueChar<Str> => {
	const set = new Map<string, number>();
	for (let idx = 0; idx < str.length; idx++) {
		const char = str[idx] as string;
		if (set.has(char)) set.delete(char);
		else set.set(char, idx);
	}
	return (set.values().next().value ?? -1) as never;
};

export type TIsIsomorphic<
	T extends string,
	U extends string,
	map extends Record<string, string> = {},
> = T extends `${infer first}${infer tRest}`
	? U extends `${infer mapped}${infer uRest}`
		? map[first] extends string
			? map[first] extends mapped
				? TIsIsomorphic<tRest, uRest, map>
				: false
			: TIsIsomorphic<tRest, uRest, map & Record<first, mapped>>
		: false
	: U extends T
		? true
		: false;

export const isIsomorphic = <T extends string, U extends string>(
	first: T,
	second: U,
): TIsIsomorphic<T, U> => {
	if (first.length !== second.length) return false as never;
	const map = new Map<string, string>();
	for (let i = 0; i < first.length; ++i) {
		const f = first[i] as string;
		const s = second[i] as string;
		if (map.has(f) && map.get(f) !== s) return false as never;
		map.set(f, s);
	}
	return true as never;
};

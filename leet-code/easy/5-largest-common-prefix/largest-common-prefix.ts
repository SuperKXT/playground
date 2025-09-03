type _TLongestCommonPrefix<
	first extends string,
	rest extends string[],
	prefix extends string = "",
> = first extends `${infer char}${infer newFirst}`
	? rest[number] extends `${prefix}${char}${string}`
		? _TLongestCommonPrefix<newFirst, rest, `${prefix}${char}`>
		: prefix
	: prefix;

type TLongestCommonPrefix<arr extends readonly string[]> =
	arr extends readonly [
		infer first extends string,
		...infer rest extends string[],
	]
		? _TLongestCommonPrefix<first, rest>
		: "";

export const longestCommonPrefix = <const Arr extends readonly string[]>(
	arr: Arr,
): TLongestCommonPrefix<Arr> => {
	const [first, ...rest] = arr;
	if (!first) return "" as never;

	let prefix = "";
	for (const char of first) {
		const newPrefix = `${prefix}${char}`;
		if (rest.some((str) => !str.startsWith(newPrefix))) return prefix as never;
		prefix = newPrefix;
	}
	return prefix as never;
};

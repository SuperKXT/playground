type TIsAnagram<
	T extends string,
	U extends string,
> = T extends `${infer first}${infer rest}`
	? U extends `${infer before}${first}${infer after}`
		? TIsAnagram<rest, `${before}${after}`>
		: false
	: U extends ""
		? true
		: false;

export const isAnagram = <T extends string, U extends string>(
	first: T,
	second: U,
): TIsAnagram<T, U> => {
	if (first.length !== second.length) return false as never;
	const firstArray = first.toLowerCase().split("").sort();
	const secondArray = second.toLowerCase().split("").sort();
	return (firstArray.join("") === secondArray.join("")) as never;
};

type TSlice<
	Num extends string,
	Start extends number,
	End extends number,
	Idx extends 1[] = [1],
> = Idx[End] extends 1
	? ""
	: Num extends `${infer first}${infer rest}`
		? Idx[Start] extends 1
			? `${first}${TSlice<rest, Start, End, [...Idx, 1]>}`
			: TSlice<rest, Start, End, [...Idx, 1]>
		: "";

type TStringLength<
	T extends string,
	Idx extends 1[] = [],
> = T extends `${string}${infer rest}`
	? TStringLength<rest, [...Idx, 1]>
	: Idx["length"];

type TFindAnagrams<
	Str extends string,
	ToCheck extends string,
	ToCheckLength extends number = TStringLength<ToCheck>,
	Res extends number[] = [],
	Idx extends 1[] = [],
> = Str extends `${string}${infer rest}`
	? TFindAnagrams<
			rest,
			ToCheck,
			ToCheckLength,
			TIsAnagram<TSlice<Str, 0, ToCheckLength>, ToCheck> extends true
				? [...Res, Idx["length"]]
				: Res,
			[...Idx, 1]
		>
	: Res;

export const findAnagrams = <Str extends string, ToCheck extends string>(
	string: Str,
	toCheck: ToCheck,
): TFindAnagrams<Str, ToCheck> => {
	if (toCheck.length > string.length) return [] as never;

	const indices: number[] = [];
	for (let i = 0; i < string.length; i++) {
		const substr = string.slice(i, i + toCheck.length);
		if (isAnagram(substr, toCheck)) indices.push(i);
	}
	return indices as never;
};

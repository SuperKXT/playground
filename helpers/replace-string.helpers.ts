export type TReplaceString<
	Str extends string,
	Search extends string,
	Replace extends string,
> = Str extends `${infer Prefix}${Search}${infer Suffix}`
	? `${Prefix}${Replace}${TReplaceString<Suffix, Search, Replace>}`
	: Str;

export const replaceString = <
	Str extends string,
	Search extends string,
	Replace extends string,
>(
	string: Str,
	searchValue: Search,
	replaceValue: Replace,
): TReplaceString<Str, Search, Replace> => {
	return string.replace(new RegExp(searchValue, "gu"), replaceValue) as never;
};

type TStringSplit<
	Str extends string,
	SplitChar extends string,
	curr extends string = "",
	arr extends string[] = [],
> = Str extends `${infer first}${infer rest}`
	? SplitChar extends "" | first
		? TStringSplit<
				rest,
				SplitChar,
				"",
				[...arr, SplitChar extends "" ? first : curr]
			>
		: TStringSplit<rest, SplitChar, `${curr}${first}`, arr>
	: curr extends ""
		? arr
		: [...arr, curr];

export const stringSplit = <Str extends string, SplitChar extends string>(
	str: Str,
	splitChar: SplitChar,
): TStringSplit<Str, SplitChar> => {
	const arr = [] as string[];
	let curr = "";
	for (const char of str) {
		if (!splitChar) {
			arr.push(char);
		} else if (char === splitChar) {
			arr.push(curr);
			curr = "";
		} else {
			curr += char;
		}
	}
	if (curr) arr.push(curr);
	return arr as never;
};

type TCompress<
	Chars extends string[],
	last extends string = never,
	count extends 1[] = [],
	res extends string[] = [],
> = Chars extends [infer first extends string, ...infer rest extends string[]]
	? first extends last
		? TCompress<rest, last, [...count, 1], res>
		: TCompress<
				rest,
				first,
				[1],
				count["length"] extends 0 | 1
					? [...res, first]
					: [...res, `${count["length"]}`, first]
			>
	: count["length"] extends 0 | 1
		? res
		: [...res, `${count["length"]}`];

export const compress = <const Chars extends string[]>(
	chars: Chars,
): TCompress<Chars> => {
	if (!chars[0]) return [] as never;
	let last = chars[0];
	let count = 1;
	const res = [];
	for (const char of chars.slice(1)) {
		if (char !== last) {
			res.push(last);
			if (count > 1) res.push(count.toString());
			count = 1;
			last = char;
		} else {
			count++;
		}
	}
	res.push(last);
	if (count > 1) res.push(count.toString());
	return res as never;
};

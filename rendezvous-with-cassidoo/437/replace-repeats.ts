type TReplaceRepeats<
	Str extends string,
	N extends number,
	count extends Array<1> = [],
> = Str extends `${infer first}${infer rest}`
	? first extends `${N}`
		? TReplaceRepeats<rest, N, [...count, 1]>
		: `${count extends [] ? "" : count["length"]}${first}${TReplaceRepeats<rest, N>}`
	: count extends []
		? ""
		: `${count["length"]}`;

export const replaceRepeats = <Str extends string, N extends number>(
	str: Str,
	n: N,
): TReplaceRepeats<Str, N> => {
	let res = "";
	let count = 0;
	const num = n.toString();
	for (const char of str) {
		if (char === num) count++;
		else {
			if (count > 0) {
				res += count.toString();
				count = 0;
			}
			res += char;
		}
	}
	if (count > 0) res += count.toString();
	return res as never;
};

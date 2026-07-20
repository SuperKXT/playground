type TCountBlinks<
	Str extends string,
	first extends boolean = false,
	max extends Array<1> = [],
	curr extends Array<1> = [],
> = Str extends `${infer char}${infer rest}`
	? char extends "_"
		? TCountBlinks<rest, true, curr[max["length"]] extends 1 ? curr : max>
		: TCountBlinks<rest, first, max, first extends true ? [...curr, 1] : curr>
	: max["length"];

export const countBlinks = <Str extends string>(
	str: Str,
): TCountBlinks<Str> => {
	let firstFound = false;
	let max = 0;
	let curr = 0;
	for (const char of str) {
		if (char === "_") {
			firstFound = true;
			max = Math.max(max, curr);
			curr = 0;
		} else if (firstFound) curr++;
	}
	return max as never;
};

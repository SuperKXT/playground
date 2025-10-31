type TSplitByWidths<
	Input extends string,
	Widths extends number[],
	res extends string[] = [],
	idx extends 1[] = [],
	currStr extends string = "",
	currSize extends 1[] = [],
> = Input extends `${infer char}${infer rest}`
	? [...currSize, 1]["length"] extends Widths[idx["length"]]
		? TSplitByWidths<
				rest,
				Widths,
				[...res, `${currStr}${char}`],
				[...idx, 1]["length"] extends Widths["length"] ? idx : [...idx, 1]
			>
		: TSplitByWidths<
				rest,
				Widths,
				res,
				idx,
				`${currStr}${char}`,
				[...currSize, 1]
			>
	: res;

export const splitByWidths = <
	Input extends string,
	const Widths extends number[],
>(
	input: Input,
	widths: Widths,
): TSplitByWidths<Input, Widths> => {
	const res: string[] = [];
	let idx = 0;
	let curr = "";
	for (const char of input) {
		curr += char;
		if (curr.length === widths[idx]) {
			res.push(curr);
			curr = "";
			idx = Math.min(idx + 1, widths.length - 1);
		}
	}
	return res as never;
};

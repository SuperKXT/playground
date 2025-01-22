type TExcludeFromTuple<
	tuple extends unknown[],
	idx extends number,
	count extends 1[] = [],
> = tuple extends [infer first, ...infer rest]
	? [
			...(count["length"] extends idx ? [] : [first]),
			...TExcludeFromTuple<rest, idx, [...count, 1]>,
		]
	: [];

type _TLetters<
	input extends string[],
	prefix extends string = "",
	idx extends 1[] = [],
> = idx["length"] extends input["length"]
	? []
	: [
			`${prefix}${input[idx["length"]]}`,
			..._TLetters<
				TExcludeFromTuple<input, idx["length"]>,
				`${prefix}${input[idx["length"]]}`
			>,
			..._TLetters<input, prefix, [...idx, 1]>,
		];

type TRemoveDuplicates<
	tuple extends unknown[],
	result extends unknown[] = [],
> = tuple extends [infer first, ...infer rest]
	? TRemoveDuplicates<
			rest,
			first extends result[number] ? result : [...result, first]
		>
	: result;

type TLetters<input extends string[]> = TRemoveDuplicates<_TLetters<input>>;

const _letters = (input: string[], prefix: string = ""): string[] => {
	const res: string[] = [];
	for (let i = 0; i < input.length; i++) {
		const curr = input[i] as string;
		const rest = input.slice(0, i).concat(input.slice(i + 1));
		const currPrefix = `${prefix}${curr}`;
		res.push(...[currPrefix, ..._letters(rest, currPrefix)]);
	}
	return res;
};

export const letters = <const Input extends string[]>(
	input: Input,
): TLetters<Input> => {
	return [...new Set(_letters(input))] as never;
};

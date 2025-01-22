const delimiters = [".", "?", "!"] as const;

type TDelimiter = (typeof delimiters)[number];

const startMap = { "?": "¿", "!": "¡" } as const;

type TStartMap = typeof startMap;

type TAppendStart<
	Sentence extends string,
	end extends TDelimiter,
> = end extends keyof TStartMap
	? Sentence extends `${TStartMap[end]}${string}`
		? Sentence
		: `${TStartMap[end]}${Sentence}`
	: Sentence;

type TFixInvertedPunctuation<
	Input extends string,
	Fixed extends string = "",
	Sentence extends string = "",
> = Input extends `${infer first}${infer rest}`
	? [Sentence, first] extends ["", " "]
		? TFixInvertedPunctuation<rest, `${Fixed} `, Sentence>
		: first extends TDelimiter
			? TFixInvertedPunctuation<
					rest,
					`${Fixed}${TAppendStart<`${Sentence}${first}`, first>}`
				>
			: TFixInvertedPunctuation<rest, Fixed, `${Sentence}${first}`>
	: `${Fixed}${Sentence}`;

export const fixInvertedPunctuation = <Input extends string>(
	input: Input,
): TFixInvertedPunctuation<Input> => {
	let fixed = "";
	let sentence = "";
	for (const char of input) {
		if (!sentence && char === " ") {
			fixed += " ";
			continue;
		}
		sentence += char;
		if (delimiters.includes(char as never)) {
			const start = (startMap as Record<string, string>)[char];
			if (start && !sentence.startsWith(start))
				sentence = `${start}${sentence}`;
			fixed += sentence;
			sentence = "";
		}
	}
	fixed += sentence;
	return fixed as never;
};

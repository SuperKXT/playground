// https://leetcode.com/problems/unique-morse-code-words

const morseMap = {
	a: ".-",
	b: "-...",
	c: "-.-.",
	d: "-..",
	e: ".",
	f: "..-.",
	g: "--.",
	h: "....",
	i: "..",
	j: ".---",
	k: "-.-",
	l: ".-..",
	m: "--",
	n: "-.",
	o: "---",
	p: ".--.",
	q: "--.-",
	r: ".-.",
	s: "...",
	t: "-",
	u: "..-",
	v: "...-",
	w: ".--",
	x: "-..-",
	y: "-.--",
	z: "--..",
} as const;

type TMorseMap = typeof morseMap;

type TToMorse<Word extends string> = Word extends `${infer Char}${infer Rest}`
	? `${Char extends keyof TMorseMap ? TMorseMap[Char] : ""}${TToMorse<Rest>}`
	: "";

type TUniqueMorseCodeWords<
	Words extends string[],
	union extends string = never,
	count extends Array<1> = [],
> = Words extends [infer first extends string, ...infer rest extends string[]]
	? TToMorse<first> extends infer morse extends string
		? TUniqueMorseCodeWords<
				rest,
				union | morse,
				morse extends union ? count : [...count, 1]
			>
		: never
	: count["length"];

export const uniqueMorseCodeWords = <const Words extends string[]>(
	words: Words,
): TUniqueMorseCodeWords<Words> => {
	const set = new Set<string>();
	for (const word of words) {
		let morse = "";
		for (const char of word) {
			if (char in morseMap) morse += morseMap[char as keyof typeof morseMap];
			else throw new Error(`Invalid character ${char}`);
		}
		set.add(morse);
	}
	return set.size as never;
};

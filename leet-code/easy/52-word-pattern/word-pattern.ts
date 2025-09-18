// https://leetcode.com/problems/word-pattern

type TGetWord<S extends string> = S extends `${infer word} ${infer rest}`
	? [word, rest]
	: [S, ""];

type TWordPattern<
	Pattern extends string,
	S extends string,
	map extends Record<string, string> = {},
	set extends string = never,
> = Pattern extends `${infer char}${infer charRest}`
	? TGetWord<S> extends [
			infer word extends string,
			infer wordRest extends string,
		]
		? map[char] extends infer expected extends string
			? word extends expected
				? TWordPattern<charRest, wordRest, map, set | word>
				: false
			: word extends set
				? false
				: TWordPattern<charRest, wordRest, map & Record<char, word>, set | word>
		: false
	: S extends ""
		? true
		: false;

export const wordPattern = <Pattern extends string, S extends string>(
	pattern: Pattern,
	s: S,
): TWordPattern<Pattern, S> => {
	const words = s.split(" ");
	if (words.length !== pattern.length) return false as never;

	const map = new Map<string, string>();
	const set = new Set<string>();
	for (let idx = 0; idx < pattern.length; idx++) {
		const char = pattern[idx] as string;
		const word = words[idx] as string;
		const expected = map.get(char);
		if (expected) {
			if (word !== expected) return false as never;
		} else {
			if (set.has(word)) return false as never;
			map.set(char, word);
		}
		set.add(word);
	}
	return true as never;
};

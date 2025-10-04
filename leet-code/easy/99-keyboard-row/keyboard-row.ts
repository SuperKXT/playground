// https://leetcode.com/problems/keyboard-rows

const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"] as const; // cSpell: disable-line
const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"] as const; // cSpell: disable-line
const row3 = ["z", "x", "c", "v", "b", "n", "m"] as const; // cSpell: disable-line

type TRow1 = (typeof row1)[number];
type TRow2 = (typeof row2)[number];
type TRow3 = (typeof row3)[number];

const set1 = new Set(row1);
const set2 = new Set(row2);
const set3 = new Set(row3);

type TCheckWord<
	Word extends string,
	Row extends string,
> = Word extends `${infer first}${infer rest}`
	? first extends Row
		? TCheckWord<rest, Row>
		: false
	: true;

type TGetSet<Char extends string> = Char extends TRow1
	? TRow1
	: Char extends TRow2
		? TRow2
		: TRow3;

type TKeyboardRow<Words extends string[]> = Words extends [
	infer word extends string,
	...infer rest extends string[],
]
	? word extends `${infer char}${infer restWord}`
		? TCheckWord<Lowercase<restWord>, TGetSet<Lowercase<char>>> extends true
			? [word, ...TKeyboardRow<rest>]
			: TKeyboardRow<rest>
		: [word, ...TKeyboardRow<rest>]
	: [];

export const keyboardRow = <const Words extends string[]>(
	words: Words,
): TKeyboardRow<Words> => {
	const res: string[] = [];
	outer: for (const word of words) {
		const first = word[0]?.toLowerCase();
		if (!first) {
			res.push(word);
			continue;
		}
		const set = set1.has(first) ? set1 : set2.has(first) ? set2 : set3;
		for (const char of word) {
			if (!set.has(char.toLowerCase())) continue outer;
		}
		res.push(word);
	}
	return res as never;
};

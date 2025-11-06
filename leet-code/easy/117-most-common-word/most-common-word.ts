// https://leetcode.com/problems/most-common-word

// export const mostCommonWord = (paragraph: string, banned: string[]): string => {
// 	const bannedSet = new Set(banned);
// 	const map = new Map<string, number>();
// 	const words = paragraph.split(" ");
// 	const max = { count: 0, word: "" };
// 	for (const row of words) {
// 		const word = row.toLowerCase().replace(/[^\w]+/gu, "");
// 		if (bannedSet.has(word)) continue;
// 		const existing = (map.get(word) ?? 0) + 1;
// 		map.set(word, existing);
// 		if (existing > max.count) {
// 			max.count = existing;
// 			max.word = word;
// 		}
// 	}
// 	return max.word;
// };

type TIsLetter<T extends string> =
	Uppercase<T> extends Lowercase<T> ? false : true;

type TState = {
	curr: string;
	map: Record<string, Array<1>>;
	max: { count: Array<1>; word: string };
};

type TAddOne<curr extends string, map extends Record<string, Array<1>>> =
	map[curr] extends Array<1> ? [1, ...map[curr]] : [1];

type TCheckWord<
	Banned extends string[],
	State extends TState,
> = State["curr"] extends "" | Banned[number]
	? { curr: ""; map: State["map"]; max: State["max"] }
	: TAddOne<State["curr"], State["map"]> extends infer count extends Array<1>
		? count[State["max"]["count"]["length"]] extends 1
			? {
					curr: "";
					map: Omit<State["map"], State["curr"]> & Record<State["curr"], count>;
					max: { count: count; word: State["curr"] };
				}
			: {
					curr: "";
					map: Omit<State["map"], State["curr"]> & Record<State["curr"], count>;
					max: State["max"];
				}
		: State;

type TMostCommonWord<
	Paragraph extends string,
	Banned extends string[],
	state extends TState = { curr: ""; map: {}; max: { count: []; word: "" } },
> = Paragraph extends `${infer char}${infer rest}`
	? TIsLetter<char> extends true
		? TMostCommonWord<
				rest,
				Banned,
				Omit<state, "curr"> & {
					curr: `${state["curr"]}${Lowercase<char>}`;
				}
			>
		: TMostCommonWord<rest, Banned, TCheckWord<Banned, state>>
	: TCheckWord<Banned, state>["max"]["word"];

const checkWord = (
	word: string,
	max: { count: number; word: string },
	map: Map<string, number>,
) => {
	const existing = (map.get(word) ?? 0) + 1;
	map.set(word, existing);
	if (existing > max.count) {
		max.count = existing;
		max.word = word;
	}
};

export const mostCommonWord = <
	Paragraph extends string,
	const Banned extends string[],
>(
	paragraph: Paragraph,
	banned: Banned,
): TMostCommonWord<Paragraph, Banned> => {
	const bannedSet = new Set(banned);
	const map = new Map<string, number>();
	const max = { count: 0, word: "" };
	let word = "";
	for (const char of paragraph) {
		const code = char.charCodeAt(0);
		if (code >= 97 && code <= 122) word += char;
		else if (code >= 65 && code <= 90) word += char.toLowerCase();
		else {
			if (word === "") continue;
			if (bannedSet.has(word)) {
				word = "";
				continue;
			}
			checkWord(word, max, map);
			word = "";
			continue;
		}
	}
	if (word !== "") checkWord(word, max, map);
	return max.word as never;
};

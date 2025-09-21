// https://leetcode.com/problems/ransom-note

type TRansomNote<
	Note extends string,
	Magazine extends string,
> = Note extends `${infer first}${infer rest}`
	? Magazine extends `${infer before}${first}${infer after}`
		? TRansomNote<rest, `${before}${after}`>
		: false
	: true;

export const ransomNote = <Note extends string, Magazine extends string>(
	note: Note,
	magazine: Magazine,
): TRansomNote<Note, Magazine> => {
	const map = new Map<string, number>();
	for (const char of magazine) map.set(char, (map.get(char) ?? 0) + 1);
	for (const char of note) {
		const existing = map.get(char) ?? 0;
		if (!existing) return false as never;
		map.set(char, existing - 1);
	}
	return true as never;
};

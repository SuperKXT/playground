// https://leetcode.com/problems/find-the-difference

// export const findStringDifference = (s: string, t: string): string => {
// 	return t.replace(new RegExp(`[${s}]`, "gu"), "");
// };

type TFindStringDifference<
	S extends string,
	T extends string,
> = T extends `${infer first}${infer rest}`
	? S extends `${infer before}${first}${infer after}`
		? TFindStringDifference<`${before}${after}`, rest>
		: first
	: never;

export const findStringDifference = <S extends string, T extends string>(
	s: S,
	t: T,
): TFindStringDifference<S, T> => {
	const map = new Map<string, number>();
	for (const char of s) map.set(char, (map.get(char) ?? 0) + 1);
	for (const char of t) {
		const count = map.get(char) ?? 0;
		if (count > 0) map.set(char, count - 1);
		else return char as never;
	}
	throw new Error("No difference");
};

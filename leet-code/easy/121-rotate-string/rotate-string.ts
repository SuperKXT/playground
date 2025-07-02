// https://leetcode.com/problems/rotate-string

type TRotateString<
	S extends string,
	Goal extends string,
	goalAfter extends string = "",
> = S extends `${Goal}${goalAfter}`
	? true
	: Goal extends `${infer first}${infer rest}`
		? TRotateString<S, rest, `${goalAfter}${first}`>
		: false;

export const rotateString = <S extends string, Goal extends string>(
	s: S,
	goal: Goal,
): TRotateString<S, Goal> => {
	if (s.length !== goal.length) return false as never;
	if (s === goal) return true as never;
	for (let i = s.length - 1; i > 0; i--) {
		const curr = s.slice(i) + s.slice(0, i);
		if (curr === goal) return true as never;
	}
	return false as never;
};

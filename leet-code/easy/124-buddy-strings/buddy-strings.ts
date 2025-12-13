// https://leetcode.com/problems/buddy-strings

type THasDuplicate<
	Str extends string,
	existing extends string = never,
> = Str extends `${infer first}${infer rest}`
	? first extends existing
		? true
		: THasDuplicate<rest, existing | first>
	: false;

type _TBuddyStrings<
	S extends string,
	OriginalGoal extends string,
	Goal extends string,
	before extends string = "",
	first extends string = "",
	after extends string = "",
> = S extends `${infer sChar}${infer sRest}`
	? Goal extends `${infer gChar}${infer gRest}`
		? sChar extends gChar
			? _TBuddyStrings<
					sRest,
					OriginalGoal,
					gRest,
					first extends "" ? `${before}${sChar}` : before,
					first,
					first extends "" ? after : `${after}${sChar}`
				>
			: first extends ""
				? _TBuddyStrings<sRest, OriginalGoal, gRest, before, sChar, after>
				: `${before}${sChar}${after}${first}${sRest}` extends OriginalGoal
					? true
					: false
		: false
	: false;

type TBuddyStrings<S extends string, Goal extends string> = S extends Goal
	? THasDuplicate<S>
	: _TBuddyStrings<S, Goal, Goal>;

export const buddyStrings = <S extends string, Goal extends string>(
	s: S,
	goal: Goal,
): TBuddyStrings<S, Goal> => {
	if (s.length !== goal.length) return false as never;
	if ((s as string) === goal)
		return (s.length !== new Set(s.split("")).size) as never;
	let first: null | number = null;
	for (let i = 0; i < s.length; i++) {
		const sChar = s[i] as string;
		const goalChar = goal[i] as string;
		if (sChar === goalChar) continue;
		if (first === null) {
			first = i;
		} else {
			const sCheck =
				s.slice(0, first) +
				sChar +
				s.slice(first + 1, i) +
				(s[first] as string) +
				s.slice(i + 1);
			return (sCheck === goal) as never;
		}
	}
	return false as never;
};

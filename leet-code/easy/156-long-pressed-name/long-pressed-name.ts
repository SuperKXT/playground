// https://leetcode.com/problems/long-pressed-name

type TLongPressedName<
	Name extends string,
	Typed extends string,
	last extends string = never,
> = Typed extends `${infer first}${infer rest}`
	? Name extends `${infer nFirst}${infer nRest}`
		? first extends nFirst
			? TLongPressedName<nRest, rest, first>
			: first extends last
				? TLongPressedName<Name, rest, first>
				: false
		: first extends last
			? TLongPressedName<Name, rest, first>
			: false
	: Name extends ""
		? true
		: false;

export const longPressedName = <Name extends string, Typed extends string>(
	name: Name,
	typed: Typed,
): TLongPressedName<Name, Typed> => {
	if (typed.length < name.length) return false as never;
	let nameIdx = 0;
	let last: string = "";
	for (const char of typed) {
		const nameChar = name[nameIdx] as string;
		if (nameChar === char) nameIdx++;
		else if (char !== last) return false as never;
		last = char;
	}
	return (nameIdx === name.length) as never;
};

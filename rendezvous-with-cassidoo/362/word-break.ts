type TDictExists<Str extends string, Dict extends string[]> = Dict extends [
	infer match extends string,
	...infer restArr extends string[],
]
	? Str extends `${match}${infer restStr}`
		? restStr
		: TDictExists<Str, restArr>
	: false;

type TWordBreak<Str extends string, Dict extends string[]> = Str extends ""
	? true
	: TDictExists<Str, Dict> extends infer rest extends string
		? TWordBreak<rest, Dict>
		: false;

export const wordBreak = <
	const Str extends string,
	const Dict extends [string, ...string[]],
>(
	string: Str,
	dict: Dict,
): TWordBreak<Str, Dict> => {
	let curr = string;
	const regex = new RegExp(`^(${dict.join("|")})`, "ui");
	while (curr !== "") {
		const matched = curr.match(regex);
		if (!matched) return false as never;
		curr = curr.replace(matched[0], "") as Str;
	}
	return true as never;
};

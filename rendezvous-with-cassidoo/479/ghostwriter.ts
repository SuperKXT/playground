type TPop<Arr extends string[]> = Arr extends [
	...infer rest extends string[],
	unknown,
]
	? rest
	: Arr;

type TRepeat<Arr extends string[]> = Arr extends [
	...unknown[],
	infer last extends string,
]
	? [...Arr, last]
	: Arr;

type TArrToStr<Arr extends string[]> = Arr extends [
	infer char extends string,
	...infer rest extends string[],
]
	? `${char}${TArrToStr<rest>}`
	: "";

type TGhostwriter<
	Str extends string,
	arr extends string[] = [],
> = Str extends `${infer char}${infer rest}`
	? char extends "#"
		? TGhostwriter<rest, TPop<arr>>
		: char extends "~"
			? TGhostwriter<rest, TRepeat<arr>>
			: TGhostwriter<rest, [...arr, char]>
	: TArrToStr<arr>;

export const ghostwriter = <Str extends string>(
	str: Str,
): TGhostwriter<Str> => {
	const res: string[] = [];
	for (const char of str) {
		if (char === "#") res.pop();
		else if (char === "~") {
			const last = res.at(-1);
			if (last) res.push(last);
		} else res.push(char);
	}
	return res.join("") as never;
};

type TCombine<
	T extends string,
	Str extends string,
> = Str extends `${infer U}+${infer V}`
	? U extends T
		? `${T}+${TCombine<T, V>}`
		: never
	: Str extends T
		? T
		: never;

type TDice = `${number}d${number}`;

export type TCheckNotation<T extends string> =
	TCombine<TDice, T> extends never ? "bad dice notation!" : T;

const diceRegex = /^(\d+d\d+\+)*\d+d\d+$/u;

export const rollDice = <T extends string>(
	input: TCheckNotation<T>,
): number => {
	if (!diceRegex.test(input)) throw new Error("bad dice notation!");
	const notations = input
		.split("+")
		.map((row) => row.split("d").map(Number) as [number, number]);
	const min = notations.reduce((m, [rolls]) => m + rolls, 0);
	const max = notations.reduce((m, [rolls, sides]) => m + rolls * sides, 0);
	return Math.floor(Math.random() * (max - min)) + min;
};

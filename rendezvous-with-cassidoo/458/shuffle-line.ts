type TShuffleLine<
	Names extends string[],
	N extends number,
	curr extends Array<1> = [1],
	left extends string[] = [],
	right extends string[] = [],
> = Names extends [infer first extends string, ...infer rest extends string[]]
	? curr["length"] extends N
		? TShuffleLine<rest, N, [1], left, [...right, first]>
		: TShuffleLine<rest, N, [...curr, 1], [...left, first], right>
	: [...left, ...right];

export const shuffleLine = <const Names extends string[], N extends number>(
	names: Names,
	n: N,
): TShuffleLine<Names, N> => {
	const left: string[] = [];
	const right: string[] = [];
	let curr = 1;
	for (const name of names) {
		if (curr !== n) {
			left.push(name);
		} else {
			right.push(name);
			curr = 0;
		}
		curr++;
	}

	return [...left, ...right] as never;
};

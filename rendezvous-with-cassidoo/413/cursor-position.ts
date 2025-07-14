const keyMap = {
	left: "h",
	down: "j",
	up: "k",
	right: "l",
} as const;

export type TKeyMap = typeof keyMap;

export type TStringGrid<
	Input extends string,
	row extends string[] = [],
	grid extends string[][] = [],
> = Input extends `${infer first}${infer rest}`
	? first extends `\n`
		? TStringGrid<rest, [], [...grid, row]>
		: TStringGrid<rest, [...row, first], grid>
	: [...grid, row];

type TUnshift<Arr extends unknown[]> = Arr extends [unknown, ...infer rest]
	? rest
	: Arr;

type TPush<Arr extends unknown[], ToAdd, MaxLength extends number> =
	`${MaxLength}` extends Exclude<keyof [...Arr, 1], keyof unknown[]>
		? Arr
		: [...Arr, ToAdd];

export type TCursorPosition<
	Input extends string,
	Commands extends string,
	grid extends string[][] = TStringGrid<Input>,
	row extends 1[] = [],
	col extends 1[] = [],
> = Commands extends `${infer first}${infer rest}`
	? TCursorPosition<
			never,
			rest,
			grid,
			first extends TKeyMap["up"]
				? TUnshift<row>
				: first extends TKeyMap["down"]
					? TPush<row, 1, TUnshift<grid>["length"]>
					: row,
			first extends TKeyMap["left"]
				? TUnshift<col>
				: first extends TKeyMap["right"]
					? TPush<col, 1, TUnshift<grid[row["length"]]>["length"]>
					: col
		>
	: grid[row["length"]][col["length"]];

export const cursorPosition = <
	const Input extends string,
	const Commands extends string,
>(
	input: Input,
	commands: Commands,
): TCursorPosition<Input, Commands> => {
	const grid = input.split("\n").map((s) => Array.from(s));
	let row = 0;
	let col = 0;
	for (const command of commands) {
		if (command === keyMap.left) col = Math.max(col - 1, 0);
		else if (command === keyMap.down) row = Math.min(row + 1, grid.length - 1);
		else if (command === keyMap.up) row = Math.max(row - 1, 0);
		else if (command === keyMap.right)
			col = Math.min(col + 1, (grid[col]?.length ?? -1) - 1);
	}
	return grid[row]?.[col] as never;
};

export const cursorPosition = (input: string, commands: string): string => {
	const grid = input.split("\n").map((s) => Array.from(s));
	let row = 0;
	let col = 0;
	for (const command of commands) {
		if (command === "h") row = Math.max(row - 1, 0);
		else if (command === "j") col = Math.min(col + 1, grid.length - 1);
		else if (command === "k") col = Math.max(col - 1, 0);
		else if (command === "l")
			row = Math.min(row + 1, (grid[row]?.length ?? -1) - 1);
	}
	const char = grid[col]?.[row];
	if (char === undefined) throw new Error("Invalid commands");
	return char;
};

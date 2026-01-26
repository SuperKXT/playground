// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game

type TMove = "A" | "B";
type TMapKey = `${"row" | "col" | "diag"}-${number}`;

const getMapKeys = (y: number, x: number): TMapKey[] => {
	const keys: TMapKey[] = [`row-${y}`, `col-${x}`];
	if (y - x === 0) keys.push("diag-1");
	if (y + x === 2) keys.push("diag-2");
	return keys;
};

export const ticTacToe = (
	moves: Array<[number, number]>,
): TMove | "Draw" | "Pending" => {
	let move: TMove = "A";
	const maps: Record<TMove, Map<TMapKey, number>> = {
		A: new Map(),
		B: new Map(),
	};
	for (const [y, x] of moves) {
		const map = maps[move];
		const keys = getMapKeys(y, x);
		for (const key of keys) {
			const existing = map.get(key) ?? 0;
			if (existing === 2) return move;
			map.set(key, existing + 1);
		}
		move = move === "A" ? "B" : "A";
	}
	if (moves.length === 9) return "Draw";
	return "Pending";
};

// https://leetcode.com/problems/available-captures-for-rook

type TDirection = "up" | "down" | "left" | "right";

type TShift<Arr extends unknown[]> = Arr extends [
	unknown,
	...infer rest extends Array<1>,
]
	? rest
	: [];

type TNextSquare<
	Pos extends [Array<1>, Array<1>],
	Direction extends TDirection,
> = Direction extends "up"
	? Pos[0] extends []
		? null
		: [TShift<Pos[0]>, Pos[1]]
	: Direction extends "left"
		? Pos[1] extends []
			? null
			: [Pos[0], TShift<Pos[1]>]
		: Direction extends "down"
			? Pos[0]["length"] extends 7
				? null
				: [[...Pos[0], 1], Pos[1]]
			: Pos[1]["length"] extends 7
				? null
				: [Pos[0], [...Pos[1], 1]];

type TCheckSquare<
	Board extends string[][],
	Pos extends [Array<1>, Array<1>],
	Direction extends TDirection,
	cell extends string = Board[Pos[0]["length"]][Pos[1]["length"]],
> = cell extends "p"
	? 1
	: cell extends "B"
		? 0
		: TNextSquare<Pos, Direction> extends infer next
			? next extends [Array<1>, Array<1>]
				? TCheckSquare<Board, next, Direction>
				: 0
			: 0;

type TFindRookInRow<
	Row extends unknown[],
	idx extends Array<1> = [],
> = Row extends [infer first, ...infer rest]
	? first extends "R"
		? idx
		: TFindRookInRow<rest, [...idx, 1]>
	: null;

type TFindRook<
	Board extends string[][],
	x extends Array<1> = [],
> = Board extends [infer row extends string[], ...infer rest extends string[][]]
	? TFindRookInRow<row> extends infer y
		? y extends Array<1>
			? [x, y]
			: TFindRook<rest, [...x, 1]>
		: TFindRook<rest, [...x, 1]>
	: null;

type TOneCount<
	Arr extends unknown[],
	count extends Array<1> = [],
> = Arr extends [infer first, ...infer rest]
	? TOneCount<rest, first extends 1 ? [...count, 1] : count>
	: count["length"];

type TNumRookCaptures<Board extends string[][]> =
	TFindRook<Board> extends infer pos
		? pos extends [Array<1>, Array<1>]
			? TOneCount<
					[
						TCheckSquare<Board, pos, "up">,
						TCheckSquare<Board, pos, "down">,
						TCheckSquare<Board, pos, "left">,
						TCheckSquare<Board, pos, "right">,
					]
				>
			: 0
		: 0;

const checkSquares = (
	board: string[][],
	pos: [number, number],
	next: (curr: [number, number]) => [number, number],
): number => {
	const cell = board[pos[0]]?.[pos[1]];
	if (cell === undefined) return 0;
	if (cell === "p") return 1;
	if (cell === "B") return 0;
	return checkSquares(board, next(pos), next);
};

// export const numRookCaptures = <const Board extends string[][]>(
// 	board: Board,
// ): TNumRookCaptures<Board> => {
// 	let rookPos: [number, number] | null = null;
// 	outer: for (let i = 0; i < board.length; i++) {
// 		const row = board[i] as string[];
// 		for (let j = 0; j < row.length; j++) {
// 			const cell = row[j];
// 			if (cell === "R") {
// 				rookPos = [i, j];
// 				break outer;
// 			}
// 		}
// 	}

// 	if (!rookPos) throw new Error("no rook found!");

// 	const count =
// 		checkSquares(board, rookPos, (curr) => [curr[0], curr[1] - 1]) +
// 		checkSquares(board, rookPos, (curr) => [curr[0], curr[1] + 1]) +
// 		checkSquares(board, rookPos, (curr) => [curr[0] - 1, curr[1]]) +
// 		checkSquares(board, rookPos, (curr) => [curr[0] + 1, curr[1]]);

// 	return count as never;
// };

export const numRookCaptures = <const Board extends string[][]>(
	board: Board,
): TNumRookCaptures<Board> => {
	const rowMap = new Map<number, "p" | "B" | "R">();
	const colMap = new Map<number, "p" | "B" | "R">();
	let count = 0;
	for (let i = 0; i < board.length; i++) {
		const row = board[i] as string[];
		for (let j = 0; j < row.length; j++) {
			const rowVal = rowMap.get(i);
			const colVal = colMap.get(j);
			const cell = row[j];
			if (cell === "p" || cell === "B" || cell === "R") {
				rowMap.set(i, cell);
				colMap.set(j, cell);
			}
			if (cell === "R") {
				if (rowVal === "p") count++;
				if (colVal === "p") count++;
			} else if (cell === "p") {
				if (rowVal === "R") count++;
				if (colVal === "R") count++;
			}
		}
	}

	return count as never;
};

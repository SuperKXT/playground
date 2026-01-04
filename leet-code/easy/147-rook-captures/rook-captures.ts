// https://leetcode.com/problems/available-captures-for-rook

type TDirection = "up" | "down" | "left" | "right";

type TShift<Arr extends 1[]> = Arr extends [
  infer first,
  ...infer rest extends 1[],
]
  ? rest
  : [];

type TNextSquare<
  Pos extends [1[], 1[]],
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
  Pos extends [1[], 1[]],
  Direcction extends TDirection,
  cell extends string = Board[Pos[0]["length"]][Pos[1]["length"]],
> = cell extends "p"
  ? 1
  : cell extends "B"
    ? 0
    : TNextSquare<Pos, Direcction> extends infer next
      ? next extends [1[], 1[]]
        ? TCheckSquare<Board, next, Direcction>
        : 0
      : 0;

type TFindRookInRow<Row extends unknown[], idx extends 1[] = []> = Row extends [
  infer first,
  ...infer rest,
]
  ? first extends "R"
    ? idx
    : TFindRookInRow<rest, [...idx, 1]>
  : null;

type TFindRook<Board extends string[][], x extends 1[] = []> = Board extends [
  infer row extends string[],
  ...infer rest extends string[][],
]
  ? TFindRookInRow<row> extends infer y
    ? y extends 1[]
      ? [x, y]
      : null
    : null
  : null;

type TOneCount<Arr extends unknown[], count extends 1[] = []> = Arr extends [
  infer first,
  ...infer rest,
]
  ? TOneCount<rest, first extends 1 ? [...count, 1] : count>
  : count["length"];

type TNumRookCaptures<Board extends string[][]> =
  TFindRook<Board> extends infer pos
    ? pos extends [1[], 1[]]
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

const checkSquares = (board: string[][], pos: [number, number], next: (curr: [number, number]) => [number, number]): number => {
    let cell = board[pos[0]]?.[pos[1]];
    if (cell === undefined) return 0;
    if (cell === 'p') return 1;
    if (cell === 'B') return 0;
    return checkSquares(board, next(pos), next);
}

const numRookCaptures = (board: string[][]): number => {

  let rookPos: [number, number] | null = null;
  outer: for (let i = 0; i < board.length; i++) {
    const row = board[i] as string[];
    for (let j = 0; j < row.length; j++) {
        const cell = board[i][j];
		if (cell === 'R') {
            rookPos = [i, j];
            break outer;
        }
    }
  }

    if (!rookPos) throw new Error('no rook found!');
    
	const count = checkSquares(board, rookPos, (curr) => [curr[0], curr[1] - 1]) + 
        checkSquares(board, rookPos, (curr) => [curr[0], curr[1] + 1]) + 
        checkSquares(board, rookPos, (curr) => [curr[0] - 1, curr[1]]) + 
        checkSquares(board, rookPos, (curr) => [curr[0] + 1, curr[1]]);

  return count;
};

// https://leetcode.com/problems/available-captures-for-rook 

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

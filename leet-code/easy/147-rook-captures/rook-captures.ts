// https://leetcode.com/problems/available-captures-for-rook 

export const numRookCaptures = (board: string[][]): number => {

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
    
	let count = 0;
    for (let i = rookPos[0]; i > 0; i--) {
        const cell = board[i][rookPos[1]];
        if (cell === 'p') count++;
        if (cell === 'B' || cell === 'p') break;
    }
    for (let i = rookPos[0]; i < board.length; i++) {
        const cell = board[i][rookPos[1]];
        if (cell === 'p') count++;
        if (cell === 'B' || cell === 'p') break;
    }
    for (let i = rookPos[1]; i > 0; i--) {
        const cell = board[rookPos[0]][i];
        if (cell === 'p') count++;
        if (cell === 'B' || cell === 'p') break;
    }
    for (let i = rookPos[1]; i < (board[0]?.length ?? 0); i++) {
        const cell = board[rookPos[0]][i];
        if (cell === 'p') count++;
        if (cell === 'B' || cell === 'p') break;
    }
  return count;
};

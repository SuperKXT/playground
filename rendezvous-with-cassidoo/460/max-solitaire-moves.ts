type TRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type TCard = { rank: TRank; color: "black" | "red" };

export const maxSolitaireMoves = (cards: TCard[]): number => {
	let moves = 0;
	let last: TCard | undefined;
	for (const card of cards) {
		if (last && last.color !== card.color && last.rank === card.rank + 1) {
			moves++;
		}
		last = card;
	}
	return moves;
};

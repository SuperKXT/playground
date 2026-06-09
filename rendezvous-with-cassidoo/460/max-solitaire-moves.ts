type TRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type TCard = { rank: TRank; color: "black" | "red" };

type TRankMap = {
	13: 12;
	12: 11;
	11: 10;
	10: 9;
	9: 8;
	8: 7;
	7: 6;
	6: 5;
	5: 4;
	4: 3;
	3: 2;
	2: 1;
	1: -1;
};

type TMaxSolitaireMoves<
	Cards extends TCard[],
	last extends TCard = never,
	moves extends Array<1> = [],
> = Cards extends [infer card extends TCard, ...infer rest extends TCard[]]
	? TMaxSolitaireMoves<
			rest,
			card,
			[last] extends [never]
				? moves
				: card["color"] extends last["color"]
					? moves
					: TRankMap[last["rank"]] extends card["rank"]
						? [...moves, 1]
						: moves
		>
	: moves["length"];

export const maxSolitaireMoves = <const Cards extends TCard[]>(
	cards: Cards,
): TMaxSolitaireMoves<Cards> => {
	let moves = 0;
	let last: TCard | undefined;
	for (const card of cards) {
		if (last && last.color !== card.color && last.rank === card.rank + 1) {
			moves++;
		}
		last = card;
	}
	return moves as never;
};

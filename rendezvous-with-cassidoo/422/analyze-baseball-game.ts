type TRes = {
	homeTotal: number;
	awayTotal: number;
	homeLedInnings: number[];
	awayLedInnings: number[];
	winner: "home" | "away";
};

export const analyzeBaseballGame = (nums: Array<[number, number]>): TRes => {
	const res: TRes = {
		homeTotal: 0,
		awayTotal: 0,
		homeLedInnings: [],
		awayLedInnings: [],
		winner: "home",
	};
	let inning = 1;
	for (const [home, away] of nums) {
		res.homeTotal += home;
		res.awayTotal += away;
		if (res.homeTotal > res.awayTotal) {
			res.homeLedInnings.push(inning);
		} else if (res.awayTotal > res.homeTotal) {
			res.awayLedInnings.push(inning);
		}
		inning++;
	}
	res.winner = res.homeTotal > res.awayTotal ? "home" : "away";
	return res;
};

export const minMoves = (start: `${number}`, end: `${number}`): number => {
	if (start.length !== end.length) throw new Error("Invalid strings");
	let turns = 0;
	for (let i = 0; i < start.length; i++) {
		const s = Number(start[i]);
		const e = Number(end[i]);
		turns += Math.min(Math.abs(s - e), 10 - Math.max(s, e) + Math.min(s, e));
	}
	return turns;
};

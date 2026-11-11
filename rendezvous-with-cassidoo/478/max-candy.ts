export const maxCandy = (houses: number[]): number => {
	let prev = 0; // best total up to the house before the last one
	let curr = 0; // best total up to the last house
	for (const candy of houses) {
		const prevCurr = curr;
		curr = Math.max(curr, prev + candy);
		prev = prevCurr;
	}
	return curr;
};

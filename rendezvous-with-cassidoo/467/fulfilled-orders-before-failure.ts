export const fulfilledOrdersBeforeFailure = (
	orders: string[][],
	stock: Record<string, number>,
): number => {
	let count = 0;
	outer: for (const order of orders) {
		for (const flavor of order) {
			if (!stock[flavor]) break outer;
			stock[flavor]--;
		}
		count++;
	}
	return count;
};

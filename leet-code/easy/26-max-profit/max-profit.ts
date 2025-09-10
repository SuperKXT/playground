export const maxProfit = (prices: number[]): number => {
	let start: number | undefined = undefined;
	let profit = 0;
	for (let idx = 0; idx < prices.length; idx++) {
		const curr = prices[idx] as number;
		const next = prices[idx + 1] ?? -Infinity;
		if (next < curr) {
			if (start) profit += curr - start;
			start = undefined;
		} else if (!start) {
			start = curr;
		}
	}

	return profit;
};

// export const maxProfit = (prices: number[]): number => {
// 	let profit = 0;
// 	for (let idx = 0; idx < prices.length; idx++) {
// 		const curr = prices[idx] as number;
// 		const next = prices[idx + 1] ?? -Infinity;
// 		const diff = next - curr;
// 		if (diff > 0) profit += diff;
// 	}
// 	return profit;
// };

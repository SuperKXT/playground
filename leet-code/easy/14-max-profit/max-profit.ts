// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

// export const maxProfit = (prices: number[]): number => {
// 	let profit = 0;
// 	for (let i = 0; i < prices.length; i++) {
// 		for (let j = i + 1; j < prices.length; j++) {
// 			const diff = (prices[j] as number) - (prices[i] as number);
// 			if (diff > profit) profit = diff;
// 		}
// 	}

// 	return profit;
// };

export const maxProfit = (prices: number[]): number => {
	const candidates: number[] = [];
	let max = null as null | number;
	let min = null as null | number;
	for (let i = prices.length - 1; i >= 0; i--) {
		const curr = prices[i] as number;
		if (max === null || curr > max) {
			if (max !== null && min !== null) {
				candidates.push(max - min);
			}
			max = curr;
			min = null;
			continue;
		} else if (min === null || curr < min) {
			min = curr;
		}
	}
	if (max !== null && min !== null) {
		candidates.push(max - min);
	}

	return Math.max(0, ...candidates);
};

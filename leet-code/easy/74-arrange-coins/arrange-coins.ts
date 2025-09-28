// https://leetcode.com/problems/arranging-coins

export const arrangeCoins = (n: number): number => {
	const row = { required: 1, curr: 0 };
	let rows = 0;
	for (let i = 1; i <= n; i++) {
		row.curr++;
		if (row.curr === row.required) {
			row.curr = 0;
			row.required++;
			rows++;
		}
	}
	return rows;
};

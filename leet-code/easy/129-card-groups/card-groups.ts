// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards

const _gcd = (a: number, b: number): number => {
	return b === 0 ? a : _gcd(b, a % b);
};

export const gcd = (nums: number[]): number => {
	const [first, ...rest] = nums;
	if (first === undefined) return 0;
	let res = first;
	for (const num of rest) res = _gcd(res, num);
	return res;
};

export const cardGroups = (deck: number[]): boolean => {
	const map = new Map<number, number>();
	let max = 0;
	for (const card of deck) {
		const curr = (map.get(card) ?? 0) + 1;
		max = Math.max(max, curr);
		map.set(card, curr);
	}
	const val = gcd(Array.from(map.values()));
	return val > 1;
};

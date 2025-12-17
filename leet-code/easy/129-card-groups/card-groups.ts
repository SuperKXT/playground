// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards

export const cardGroups = (deck: number[]): boolean => {
	const map = new Map<number, number>();
	let max = 0;
	for (const card of deck) {
		const curr = (map.get(card) ?? 0) + 1;
		max = Math.max(max, curr);
		map.set(card, curr);
	}
	if (max === 1) return false;
	for (const count of map.values()) {
		if (count !== max) return false;
	}
	return true;
};

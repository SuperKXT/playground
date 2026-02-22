// https://leetcode.com/problems/find-the-town-judge

export const findJudge = (
	n: number,
	trust: Array<[number, number]>,
): number => {
	if (n === 1) return 1;
	let max: null | { id: number; count: number } = null;
	const map = new Map<number, number>();
	const set = new Set<number>();
	for (const [from, to] of trust) {
		set.add(from);
		const count = (map.get(to) ?? 0) + 1;
		if (count > (max?.count ?? 0)) {
			max = { id: to, count };
		}
		map.set(to, count);
	}
	if (!max || set.has(max.id) || max.count !== n - 1) return -1;
	return max.id;
};

export const singleNumber = (nums: number[]): number | null => {
	const set = new Set<number>();
	for (const num of nums) {
		if (set.has(num)) set.delete(num);
		else set.add(num);
	}
	return set.values().next().value ?? null;
};

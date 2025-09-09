export const arrayIntersection = (
	nums1: number[],
	nums2: number[],
): number[] => {
	const set2 = new Map<number, number>();
	for (const num of nums2) set2.set(num, (set2.get(num) ?? 0) + 1);
	const res: number[] = [];
	for (const num of nums1) {
		const existing = set2.get(num);
		if (existing && existing > 0) {
			res.push(num);
			set2.set(num, existing - 1);
		}
	}
	return res as never;
};

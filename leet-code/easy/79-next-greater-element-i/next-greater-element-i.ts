// https://leetcode.com/problems/next-greater-element-i

export const nextGreaterElement = (
	nums1: number[],
	nums2: number[],
): number[] => {
	const remaining = new Set<number>();
	const map = new Map<number, number>();
	for (const num of nums2) {
		for (const r of remaining) {
			if (num <= r) continue;
			map.set(r, num);
			remaining.delete(r);
		}
		remaining.add(num);
	}
	const res: number[] = [];
	for (const num of nums1) {
		res.push(map.get(num) ?? -1);
	}
	return res;
};

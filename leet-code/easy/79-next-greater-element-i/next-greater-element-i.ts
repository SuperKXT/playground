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
	return nums1.map((num) => map.get(num) ?? -1);
};

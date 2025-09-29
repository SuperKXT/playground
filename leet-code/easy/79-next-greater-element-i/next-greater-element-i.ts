// https://leetcode.com/problems/next-greater-element-i

// export const nextGreaterElement = (
// 	nums1: number[],
// 	nums2: number[],
// ): number[] => {
// 	const remaining = new Set<number>();
// 	const map = new Map<number, number>();
// 	for (const num of nums2) {
// 		for (const r of remaining) {
// 			if (num <= r) continue;
// 			map.set(r, num);
// 			remaining.delete(r);
// 		}
// 		remaining.add(num);
// 	}
// 	return nums1.map((num) => map.get(num) ?? -1);
// };

export const nextGreaterElement = (
	nums1: number[],
	nums2: number[],
): number[] => {
	const stack: number[] = [];
	const map = new Map<number, number>();
	for (let idx = nums2.length - 1; idx >= 0; idx--) {
		const curr = nums2[idx] as number;
		while (stack.length > 0 && (stack.at(-1) as number) <= curr) {
			stack.pop();
		}
		map.set(curr, stack.at(-1) ?? -1);
		stack.push(curr);
	}
	return nums1.map((num) => map.get(num) ?? -1);
};

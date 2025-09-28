// https://leetcode.com/problems/intersection-of-two-arrays

// export const arrayIntersection = (
// 	nums1: number[],
// 	nums2: number[],
// ): number[] => {
// 	const set1 = new Set(nums1);
// 	const set2 = new Set(nums2);
// 	return Array.from(set2.intersection(set1));
// };

export const arrayIntersection = (
	nums1: number[],
	nums2: number[],
): number[] => {
	const set = new Set(nums1);
	const res: number[] = [];
	for (const num of nums2) {
		if (set.has(num)) {
			res.push(num);
			set.delete(num);
		}
	}
	return res;
};

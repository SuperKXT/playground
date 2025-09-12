// https://leetcode.com/problems/merge-sorted-array

export const mergeSortedArrays = (nums1: number[], nums2: number[]): void => {
	if (!nums2.length) return;
	let idx = 0;
	let m = nums1.length - nums2.length;
	for (const num of nums2) {
		while (idx < m) {
			const curr = nums1[idx] as number;
			if (curr >= num) break;
			idx++;
		}
		nums1.splice(idx, 0, num);
		m++;
	}
	nums1.splice(-nums2.length);
};

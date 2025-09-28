// https://leetcode.com/problems/intersection-of-two-arrays

type TArrayIntersection<
	Nums1 extends number[],
	Nums2 extends number[],
	res extends number[] = [],
> = Nums1 extends [infer first extends number, ...infer rest extends number[]]
	? first extends Nums2[number]
		? TArrayIntersection<
				rest,
				Nums2,
				first extends res[number] ? res : [first, ...res]
			>
		: TArrayIntersection<rest, Nums2, res>
	: res;

// export const arrayIntersection = <
// 	const Nums1 extends number[],
// 	const Nums2 extends number[],
// >(
// 	nums1: Nums1,
// 	nums2: Nums2,
// ): TArrayIntersection<Nums1, Nums2> => {
// 	const set1 = new Set(nums1);
// 	const set2 = new Set(nums2);
// 	return Array.from(set2.intersection(set1)) as never;
// };

export const arrayIntersection = <
	const Nums1 extends number[],
	const Nums2 extends number[],
>(
	nums1: Nums1,
	nums2: Nums2,
): TArrayIntersection<Nums1, Nums2> => {
	const set = new Set(nums1);
	const res: number[] = [];
	for (const num of nums2) {
		if (set.has(num)) {
			res.push(num);
			set.delete(num);
		}
	}
	return res as never;
};

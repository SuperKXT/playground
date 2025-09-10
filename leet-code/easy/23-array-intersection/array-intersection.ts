// https://leetcode.com/problems/intersection-of-two-arrays-ii

type TRemoveFirst<Arr extends unknown[], Val> = Arr extends [
	infer first,
	...infer rest,
]
	? first extends Val
		? rest
		: TRemoveFirst<rest, Val>
	: [];

type TArrayIntersection<
	Nums1 extends unknown[],
	Nums2 extends unknown[],
> = Nums1 extends [infer first, ...infer rest]
	? first extends Nums2[number]
		? [first, ...TArrayIntersection<rest, TRemoveFirst<Nums2, first>>]
		: TArrayIntersection<rest, Nums2>
	: [];

export const arrayIntersection = <
	const Nums1 extends number[],
	const Nums2 extends number[],
>(
	nums1: Nums1,
	nums2: Nums2,
): TArrayIntersection<Nums1, Nums2> => {
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

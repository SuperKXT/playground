// https://leetcode.com/problems/sort-array-by-parity

type TIsEven<N extends number> = `${N}` extends `${string}${0 | 2 | 4 | 6 | 8}`
	? true
	: false;

type TSortArrayByParity<
	Nums extends number[],
	res extends number[] = [],
> = Nums extends [infer first extends number, ...infer rest extends number[]]
	? TSortArrayByParity<
			rest,
			TIsEven<first> extends true ? [first, ...res] : [...res, first]
		>
	: res;

export const sortArrayByParity = <const Nums extends number[]>(
	nums: Nums,
): TSortArrayByParity<Nums> => {
	const res: number[] = [];
	for (const num of nums) {
		if (num % 2 === 0) res.unshift(num);
		else res.push(num);
	}
	return res as never;
};

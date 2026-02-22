// https://leetcode.com/problems/find-the-town-judge

type TExtract<
	N extends number,
	Map extends Record<string, unknown[]>,
	Trusts,
> = keyof {
	[k in keyof Map as [...Map[k], 1]["length"] extends N
		? k extends Trusts
			? never
			: k
		: never]: k;
};

type TAdd<
	Map extends Record<string, unknown[]>,
	K extends PropertyKey,
> = K extends keyof Map
	? Omit<Map, K> & Record<K, [...Map[K], 1]>
	: Map & Record<K, [1]>;

type _TFindJudge<
	N extends number,
	Trust extends Array<[number, number]>,
	map extends Record<number, Array<1>> = {},
	trusts extends number = never,
> = Trust extends [
	infer first extends [number, number],
	...infer rest extends Array<[number, number]>,
]
	? _TFindJudge<N, rest, TAdd<map, first[1]>, trusts | first[0]>
	: TExtract<N, map, trusts> extends infer val
		? [val] extends [never]
			? -1
			: val
		: -1;

type TFindJudge<
	N extends number,
	Trust extends Array<[number, number]>,
> = N extends 1 ? 1 : _TFindJudge<N, Trust>;

export const findJudge = <
	N extends number,
	const Trust extends Array<[number, number]>,
>(
	n: N,
	trust: Trust,
): TFindJudge<N, Trust> => {
	if (n === 1) return 1 as never;
	let max: null | { id: number; count: number } = null;
	const map = new Map<number, number>();
	const set = new Set<number>();
	for (const [from, to] of trust) {
		set.add(from);
		const count = (map.get(to) ?? 0) + 1;
		if (count > (max?.count ?? 0)) {
			max = { id: to, count };
		}
		map.set(to, count);
	}
	if (!max || set.has(max.id) || max.count !== n - 1) return -1 as never;
	return max.id as never;
};

type TMapSideLengths<
	Parts extends readonly number[],
	map extends Record<number, 1[]> = {},
> = Parts extends readonly [
	infer first extends number,
	...infer rest extends number[],
]
	? TMapSideLengths<
			rest,
			Omit<map, first> &
				Record<
					first,
					map[first] extends infer curr extends 1[] ? [...curr, 1] : [1]
				>
		>
	: map;

type TCanFormHexagon<
	Parts extends readonly number[],
	map = TMapSideLengths<Parts>,
> = [1, 1] extends map[keyof map] ? true : false;

export const canFormHexagon = <const Parts extends readonly number[]>(
	parts: Parts,
): TCanFormHexagon<Parts> => {
	const map = new Map<number, number>();
	for (const r of parts) {
		map.set(r, (map.get(r) ?? 0) + 1);
	}
	return Array.from(map.values()).every((r) => r === 2) as never;
};

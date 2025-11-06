// https://leetcode.com/problems/can-place-flowers

type TCanPlaceFlowers<
	Flowerbed extends number[],
	N extends number,
	prev extends number = 0,
	count extends Array<1> = [],
> = count["length"] extends N
	? true
	: Flowerbed extends [
				infer first extends number,
				infer second extends number,
				...infer rest extends number[],
		  ]
		? prev | first | second extends 0
			? TCanPlaceFlowers<[second, ...rest], N, first, [...count, 1]>
			: TCanPlaceFlowers<[second, ...rest], N, first, count>
		: Flowerbed extends [
					infer first extends number,
					...infer rest extends number[],
			  ]
			? first | prev extends 0
				? TCanPlaceFlowers<rest, N, first, [...count, 1]>
				: false
			: false;

export const canPlaceFlowers = <
	const Flowerbed extends number[],
	N extends number,
>(
	flowerbed: Flowerbed,
	n: N,
): TCanPlaceFlowers<Flowerbed, N> => {
	if (n === 0) return true as never;
	let remaining = n;
	for (let i = 0; i < flowerbed.length; i++) {
		const prev = flowerbed[i - 1] ?? 0;
		const curr = flowerbed[i] as number;
		const next = flowerbed[i + 1] ?? 0;
		if (prev === 0 && curr === 0 && next === 0) {
			remaining--;
			if (remaining === 0) return true as never;
			i++;
		}
	}
	return false as never;
};

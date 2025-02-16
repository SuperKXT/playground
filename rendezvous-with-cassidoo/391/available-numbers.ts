type TPosition = keyof typeof positionMap;

const _1_9 = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
const _10_19 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] as const;
const _20_29 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29] as const;
const _30_39 = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39] as const;
const _40_49 = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49] as const;
const _50_59 = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59] as const;
const _60_69 = [60, 62, 63, 64, 65, 66, 67, 68, 69] as const;
const _70_79 = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79] as const;
const _80_89 = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89] as const;
const _90_99 = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99] as const;

const positionMap = {
	QB: [..._1_9, ..._10_19] as const,
	RB: [..._1_9, ..._10_19, ..._20_29, ..._30_39, ..._40_49, ..._80_89] as const,
	WR: [..._1_9, ..._10_19, ..._20_29, ..._30_39, ..._40_49, ..._80_89] as const,
	TE: [..._1_9, ..._10_19, ..._20_29, ..._30_39, ..._40_49, ..._80_89] as const,
	OL: [..._50_59, ..._60_69, ..._70_79] as const,
	DL: [..._50_59, ..._60_69, ..._70_79, ..._90_99] as const,
	LB: [
		..._1_9,
		..._10_19,
		..._20_29,
		..._30_39,
		..._40_49,
		..._50_59,
		..._90_99,
	] as const,
	DB: [..._1_9, ..._10_19, ..._20_29, ..._30_39, ..._40_49] as const,
	K: [..._1_9, ..._10_19, ..._20_29, ..._30_39, ..._40_49, ..._90_99] as const,
	P: [..._1_9, ..._10_19, ..._20_29, ..._30_39, ..._40_49, ..._90_99] as const,
	LS: [
		..._1_9,
		..._10_19,
		..._20_29,
		..._30_39,
		..._40_49,
		..._50_59,
		..._60_69,
		..._70_79,
		..._80_89,
		..._90_99,
	] as const,
};

type TAvailableNumbers<
	Pos extends TPosition,
	Filled extends number[],
	opts extends readonly number[] = (typeof positionMap)[Pos],
	res extends number[] = [],
> = opts extends readonly [
	infer first extends number,
	...infer rest extends readonly number[],
]
	? TAvailableNumbers<
			Pos,
			Filled,
			rest,
			first extends Filled[number] ? res : [...res, first]
		>
	: res;

export const availableNumbers = <
	Pos extends TPosition,
	const Filled extends number[],
>(
	position: Pos,
	filled: Filled,
): TAvailableNumbers<Pos, Filled> => {
	const set = new Set(filled);
	return positionMap[position].filter((num) => !set.has(num)) as never;
};

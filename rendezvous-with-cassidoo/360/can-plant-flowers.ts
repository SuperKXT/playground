type TTuple<
	size extends number,
	res extends 1[] = [],
> = res["length"] extends size ? res : TTuple<size, [...res, 1]>;

type TFlag = 0 | 1;

type TCanPlantFlowers<
	Line extends TFlag[],
	ToAdd extends number,
	remaining extends unknown[] = TTuple<ToAdd>,
	prev extends TFlag = 0,
> = remaining extends [unknown, ...infer newRemaining]
	? Line extends [
			infer curr extends TFlag,
			infer next extends TFlag,
			...infer rest extends TFlag[],
		]
		? [prev, curr, next] extends [0, 0, 0]
			? TCanPlantFlowers<[next, ...rest], ToAdd, newRemaining, 1>
			: TCanPlantFlowers<[next, ...rest], ToAdd, remaining, curr>
		: Line extends [infer curr extends 0]
			? TCanPlantFlowers<[], ToAdd, newRemaining, curr>
			: false
	: true;

export const canPlantFlowers = <
	Line extends [TFlag, ...TFlag[]],
	ToAdd extends number,
>(
	line: Line,
	toAdd: ToAdd,
): TCanPlantFlowers<Line, ToAdd> => {
	let remaining = toAdd;
	for (let idx = 0; idx < line.length; idx++) {
		if (!remaining) break;
		const curr = line[idx];
		const last = line[idx - 1];
		const next = line[idx + 1];
		if (!curr && !last && !next) {
			remaining--;
			line[idx] = 1;
		}
	}
	return !remaining as never;
};

type TFabric = "normal" | "heavy" | "delicate";

type TItem = [color: string, fabric: TFabric];

type TItemKey<T extends TItem> =
	`${T[0]}-${T[1] extends "delicate" ? "delicate" : "mixed"}`;

type TMinLaundryLoads<
	Items extends TItem[],
	Count extends 1[] = [],
	Existing extends Record<string, 1> = {},
> = Items extends [infer first extends TItem, ...infer rest extends TItem[]]
	? TItemKey<first> extends keyof Existing
		? TMinLaundryLoads<rest, Count, Existing>
		: TMinLaundryLoads<
				rest,
				[...Count, 1],
				Existing & Record<TItemKey<first>, 1>
			>
	: Count["length"];

export const minLaundryLoads = <const Items extends [TItem, ...TItem[]]>(
	items: Items,
): TMinLaundryLoads<Items> => {
	const colorSet = new Set<string>();
	for (const [color, fabric] of items) {
		const key = `${color}-${fabric === "delicate" ? "delicate" : "mixed"}`;
		colorSet.add(key);
	}
	return colorSet.size as never;
};

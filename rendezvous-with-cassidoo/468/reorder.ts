type TRes<
	Map extends Record<number, string>,
	Size extends number,
	res extends string[] = [],
	idx extends Array<1> = [],
> = res["length"] extends Size
	? res
	: Map[idx["length"]] extends string
		? TRes<Map, Size, [...res, Map[idx["length"]]], [...idx, 1]>
		: never;

type _TReorder<
	Arr extends readonly string[],
	Indices extends readonly number[],
	map extends Record<number, string> = {},
	size extends Array<1> = [],
> = Arr extends readonly [
	infer str extends string,
	...infer arrRest extends string[],
]
	? Indices extends readonly [
			infer idx extends number,
			...infer idxRest extends number[],
		]
		? _TReorder<arrRest, idxRest, map & Record<idx, str>, [...size, 1]>
		: never
	: TRes<map, size["length"]>;

type TReorder<
	Arr extends readonly string[],
	Indices extends readonly number[],
> = number extends Arr["length"] | Indices["length"]
	? string[]
	: _TReorder<Arr, Indices>;

export const reorder = <
	const Arr extends readonly string[],
	const Indices extends readonly number[],
>(
	arr: Arr,
	indices: Indices,
): TReorder<Arr, Indices> => {
	const map = new Map<number, string>();
	for (let i = 0; i < arr.length; i++) {
		const str = arr[i] as string;
		const idx = indices[i];
		if (idx === undefined) throw new Error("missing index");
		map.set(idx, str);
	}
	return Array.from(
		{ length: arr.length },
		(_, idx) => map.get(idx) as string,
	) as never;
};

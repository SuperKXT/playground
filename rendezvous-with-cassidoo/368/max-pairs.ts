type TFindPair<T extends TShoe> = T extends `${infer foot}-${infer size}`
	? `${foot extends "L" ? "R" : "L"}-${size}`
	: never;

type TMaxPairs<
	Pairs extends TShoe[],
	Found extends Record<TShoe, Array<1>> = {},
	Count extends Array<1> = [],
> = Pairs extends [infer curr extends TShoe, ...infer rest extends TShoe[]]
	? Found[TFindPair<curr>] extends [number, ...infer restPairs extends Array<1>]
		? TMaxPairs<
				rest,
				{
					[k in keyof Found]: TFindPair<curr> extends k ? restPairs : Found[k];
				},
				[...Count, 1]
			>
		: TMaxPairs<
				rest,
				Omit<Found, curr> & {
					[k in curr]: Found[k] extends Array<1> ? [1, ...Found[k]] : [1];
				},
				Count
			>
	: Count["length"];

type TFoot = "L" | "R";
type TShoe = `${TFoot}-${number}`;

export const maxPairs = <const Pairs extends [TShoe, ...TShoe[]]>(
	pairs: Pairs,
): TMaxPairs<Pairs> => {
	let count = 0;
	const found = new Map<TShoe, number>();
	for (const shoe of pairs) {
		const [foot, size] = shoe.split("-") as [TFoot, number];
		const pair: TShoe = `${foot === "L" ? "R" : "L"}-${size}`;
		const pairCount = found.get(pair) ?? 0;
		if (pairCount) {
			found.set(pair, pairCount - 1);
			count++;
		} else {
			found.set(shoe, (found.get(shoe) ?? 0) + 1);
		}
	}
	return count as never;
};

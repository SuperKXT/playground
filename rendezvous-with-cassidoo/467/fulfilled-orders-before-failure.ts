type TTuple<
	Size extends number,
	T,
	res extends T[] = [],
> = res["length"] extends Size ? res : TTuple<Size, T, [...res, T]>;

type _TFulfilledOrdersBeforeFailure<
	Orders extends string[][],
	Stock extends Record<string, Array<1>>,
	count extends Array<1> = [],
> = Orders extends [
	infer curr extends string[],
	...infer rest extends string[][],
]
	? curr extends [
			infer flavor extends string,
			...infer restFlavors extends string[],
		]
		? Stock[flavor] extends [1, ...infer rem extends Array<1>]
			? _TFulfilledOrdersBeforeFailure<
					[restFlavors, ...rest],
					Omit<Stock, flavor> & Record<flavor, rem>,
					count
				>
			: count["length"]
		: _TFulfilledOrdersBeforeFailure<rest, Stock, [...count, 1]>
	: count["length"];

type TFulfilledOrdersBeforeFailure<
	Orders extends string[][],
	Stock extends Record<string, number>,
> = _TFulfilledOrdersBeforeFailure<
	Orders,
	{ [k in keyof Stock]: TTuple<Stock[k], 1> }
>;

export const fulfilledOrdersBeforeFailure = <
	const Orders extends string[][],
	const Stock extends Record<string, number>,
>(
	orders: Orders,
	stock: Stock,
): TFulfilledOrdersBeforeFailure<Orders, Stock> => {
	let count = 0;
	const remaining = { ...stock } as Record<string, number>;
	outer: for (const order of orders) {
		for (const flavor of order) {
			if (!remaining[flavor]) break outer;
			remaining[flavor]--;
		}
		count++;
	}
	return count as never;
};

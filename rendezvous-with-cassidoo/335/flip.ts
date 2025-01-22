type TReverseTuple<
	T extends readonly unknown[],
	res extends readonly unknown[] = [],
> = T extends readonly [infer first, ...infer rest]
	? TReverseTuple<rest, [first, ...res]>
	: res;

type TMapReverse<T extends readonly (readonly unknown[])[]> =
	T extends readonly [
		infer first extends readonly unknown[],
		...infer rest extends readonly (readonly unknown[])[],
	]
		? [Readonly<TReverseTuple<first>>, ...TMapReverse<rest>]
		: [];

type TFlip<
	input extends readonly (readonly unknown[])[],
	direction extends "horizontal" | "vertical",
> = Readonly<
	direction extends "vertical" ? TReverseTuple<input> : TMapReverse<input>
>;

export const flip = <
	const Input extends readonly (readonly unknown[])[],
	Direction extends "horizontal" | "vertical",
>(
	input: Input,
	direction: Direction,
): TFlip<Input, Direction> => {
	return (
		direction === "vertical"
			? input.toReversed()
			: input.map((row) => row.toReversed())
	) as never;
};
